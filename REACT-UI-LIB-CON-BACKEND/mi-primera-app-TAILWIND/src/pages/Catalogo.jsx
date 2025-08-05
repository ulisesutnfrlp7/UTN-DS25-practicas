import { useEffect, useState } from 'react';
import FormularioLibro from '../components/FormularioLibro';
import ListaLibros from '../components/ListaLibros';
import ReseñasDestacadas from '../components/ReseñasDestacadas';
import { getBooks } from '../api/api';

const Catalogo = () => {
  const [catalogo, setCatalogo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getBooks()
      .then(data => {
        setCatalogo(data.books);
        setLoading(false);
      })
      .catch(err => {
        console.error("❌ Error al cargar libros:", err.message);
        setError("NO SE PUDO CARGAR EL CATÁLOGO");
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center gap-28 px-6 py-20 bg-gradient-to-b from-amber-50 via-white to-yellow-100">
      <FormularioLibro setCatalogo={setCatalogo} />
      {loading ? (
        <p className="text-center text-xl font-[Impact] text-gray-600">CARGANDO CATÁLOGO...</p>
      ) : error ? (
        <p className="text-center text-xl font-[Impact] text-red-600">{error}</p>
      ) : (
        <ListaLibros catalogo={catalogo} />
      )}
      <ReseñasDestacadas />
    </section>
  );
};

export default Catalogo;