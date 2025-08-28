// src/pages/SeccionLibros.jsx

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBooksByCategory } from '../api/api';
import LibroSeccion from '../components/LibroSeccion';

const categoriaMap = {
  novelas: "Novela",
  terror: "Terror",
  "ciencia-ficcion": "CienciaFiccion",
  policiales: "Policial"
};

const titulosSeccion = {
  novelas: "NUESTRAS NOVELAS...",
  terror: "NUESTRAS HISTORIAS DE TERROR...",
  policiales: "NUESTROS POLICIALES...",
  "ciencia-ficcion": "NUESTRAS HISTORIAS DE CIENCIA FICCIÓN...",
};

const SeccionLibros = () => {
  const { categoria } = useParams();
  const [libros, setLibros] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLibros = async () => {
      if (!categoriaMap[categoria]) {
        setError("Categoría no válida");
        return;
      }
      try {
        const librosCargados = await getBooksByCategory(categoriaMap[categoria]);
        setLibros(librosCargados.books || []);
      } catch (error) {
        console.error("Error al cargar libros:", error);
        setError("No se pudieron cargar los libros");
      }
    };
    fetchLibros();
  }, [categoria]);

  return (
    <div className="libros flex-1 w-full px-6 py-4 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center font-[Impact] text-brown">
        {titulosSeccion[categoria] || "SECCIÓN DESCONOCIDA"}
      </h1>

      {error ? (
        <p className="text-center text-red-600 font-bold">{error}</p>
      ) : (
        libros.map(libro => (
          <LibroSeccion
            key={libro.id}
            titulo={`${libro.title} — ${libro.author?.name ?? ''}`}
            sinopsis={libro.description}
            imagen={libro.image}
          />
        ))
      )}
    </div>
  );
};

export default SeccionLibros;