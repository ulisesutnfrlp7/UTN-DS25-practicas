// src/pages/Catalogo.jsx

import { useEffect, useState } from 'react';
import FormularioLibro from '../components/FormularioLibro';
import ListaLibros from '../components/ListaLibros';
import ReseñasDestacadas from '../components/ReseñasDestacadas';
import { librosPorSeccion } from '../data/librosPorSeccion';

const librosIniciales = Object.values(librosPorSeccion).flat();

const Catalogo = () => {
  const [catalogo, setCatalogo] = useState(librosIniciales);

  useEffect(() => {
    console.log("✅ CATÁLOGO MONTADO CORRECTAMENTE");
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center gap-28 px-6 py-20 bg-gradient-to-b from-amber-50 via-white to-yellow-100">
      <FormularioLibro setCatalogo={setCatalogo} />
      <ListaLibros catalogo={catalogo} />
      <ReseñasDestacadas />
    </section>
  );
};

export default Catalogo;