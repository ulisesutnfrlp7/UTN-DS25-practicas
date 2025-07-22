import Libro from '../components/Libro';
import { librosPorSeccion } from '../data/librosporSeccion';

const libros = librosPorSeccion["ciencia-ficcion"];

const S_CienciaFiccion = () => {
  return (
    <div className="libros">
      <h1>NUESTRAS HISTORIAS DE CIENCIA FICCIÓN...</h1>
      {libros.map(libro => (
        <Libro
          key={libro.id}
          titulo={libro.titulo}
          sinopsis={libro.sinopsis}
          imagen={libro.imagen}
        />
      ))}
    </div>
  );
};

export default S_CienciaFiccion;