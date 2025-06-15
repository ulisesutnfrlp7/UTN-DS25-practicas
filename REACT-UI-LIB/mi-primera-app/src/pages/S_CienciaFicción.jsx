import Libro from '../components/Libro';
import duneImg from '../assets/images/scifi_1.jpeg';
import fahrenheitImg from '../assets/images/scifi_2.jpeg';
import orwellImg from '../assets/images/scifi_3.jpeg';
import mundoFelizImg from '../assets/images/terror_4.jpeg';
import neuromanteImg from '../assets/images/neuromante.jpg';
import guerraMundosImg from '../assets/images/terror_6.jpeg';

const S_CienciaFiccion = () => {
    return (
        <div className="container py-4">
            <h1 className="mb-4">NUESTRAS HISTORIAS DE CIENCIA FICCIÓN...</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col"><Libro titulo="DUNE - FRANK HERBERT" sinopsis="Lucha política y ecológica en un planeta desértico donde una especia controla el universo." imagen={duneImg} /></div>
                <div className="col"><Libro titulo="FAHRENHEIT 451 - RAY BRADBURY" sinopsis="En una sociedad que prohíbe leer, los bomberos queman libros." imagen={fahrenheitImg} /></div>
                <div className="col"><Libro titulo="1984 - GEORGE ORWELL" sinopsis="Distopía sobre un régimen totalitario que vigila todos los aspectos de la vida." imagen={orwellImg} /></div>
                <div className="col"><Libro titulo="UN MUNDO FELIZ - ALDOUS HUXLEY" sinopsis="Sociedad futurista donde la felicidad se impone mediante el control genético y psicológico." imagen={mundoFelizImg} /></div>
                <div className="col"><Libro titulo="NEUROMANTE - WILLIAM GIBSON" sinopsis="Novela cyberpunk que introdujo el concepto de la matriz (precursora del ciberespacio)." imagen={neuromanteImg} /></div>
                <div className="col"><Libro titulo="LA GUERRA DE LOS MUNDOS - H. G. WELLS" sinopsis="Invasión marciana pone en jaque a la humanidad en la Inglaterra victoriana." imagen={guerraMundosImg} /></div>
            </div>
        </div>
    );
};

export default S_CienciaFiccion;