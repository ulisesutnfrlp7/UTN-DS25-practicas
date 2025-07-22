import Libro from '../components/Libro';
import { librosPorSeccion } from '../data/librosporSeccion';

const libros = librosPorSeccion["policiales"];

const S_Policial = () => {
  return (
    <div className="libros">
      <h1>NUESTROS POLICIALES...</h1>
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

export default S_Policial;