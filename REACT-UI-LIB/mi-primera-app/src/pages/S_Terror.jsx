import Libro from '../components/Libro';
import { librosPorSeccion } from '../data/librosporSeccion';

const libros = librosPorSeccion["terror"];

const S_Terror = () => {
  return (
    <div className="libros">
      <h1>NUESTRAS HISTORIAS DE TERROR...</h1>
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

export default S_Terror;