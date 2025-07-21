import Libro from '../components/Libro';
import duneImg from '../assets/images/scifi_1.jpeg';
import fahrenheitImg from '../assets/images/scifi_2.jpeg';
import orwellImg from '../assets/images/scifi_3.jpeg';
import mundoFelizImg from '../assets/images/terror_4.jpeg';
import neuromanteImg from '../assets/images/neuromante.jpg';
import guerraMundosImg from '../assets/images/terror_6.jpeg';

const S_CienciaFiccion = () => {
  return (
    <section className="flex-1 w-full px-6 py-4 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center font-[Impact] text-brown">
        NUESTRAS HISTORIAS DE CIENCIA FICCIÓN...
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Libro
          titulo="DUNE - FRANK HERBERT"
          sinopsis="Lucha política y ecológica en un planeta desértico donde una especia controla el universo."
          imagen={duneImg}
        />
        <Libro
          titulo="FAHRENHEIT 451 - RAY BRADBURY"
          sinopsis="En una sociedad que prohíbe leer, los bomberos queman libros."
          imagen={fahrenheitImg}
        />
        <Libro
          titulo="1984 - GEORGE ORWELL"
          sinopsis="Distopía sobre un régimen totalitario que vigila todos los aspectos de la vida."
          imagen={orwellImg}
        />
        <Libro
          titulo="UN MUNDO FELIZ - ALDOUS HUXLEY"
          sinopsis="Sociedad futurista donde la felicidad se impone mediante el control genético y psicológico."
          imagen={mundoFelizImg}
        />
        <Libro
          titulo="NEUROMANTE - WILLIAM GIBSON"
          sinopsis="Novela cyberpunk que introdujo el concepto de la matriz (precursora del ciberespacio)."
          imagen={neuromanteImg}
        />
        <Libro
          titulo="LA GUERRA DE LOS MUNDOS - H. G. WELLS"
          sinopsis="Invasión marciana pone en jaque a la humanidad en la Inglaterra victoriana."
          imagen={guerraMundosImg}
        />
      </div>
    </section>
  );
};

export default S_CienciaFiccion;