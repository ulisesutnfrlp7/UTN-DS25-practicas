// src/pages/S_CienciaFiccion.jsx
import duneImg from '../assets/images/scifi_1.jpeg';
import fahrenheitImg from '../assets/images/scifi_2.jpeg';
import orwellImg from '../assets/images/scifi_3.jpeg';
import mundoFelizImg from '../assets/images/terror_4.jpeg';
import neuromanteImg from '../assets/images/neuromante.jpg';
import guerraMundosImg from '../assets/images/terror_6.jpeg';

const S_CienciaFiccion = () => {
    return (
        <div className="libros">
            <h1>NUESTRAS HISTORIAS DE CIENCIA FICCIÓN...</h1>

            <div>
                <h4>DUNE - FRANK HERBERT</h4>
                <p>
                    SINOPSIS: lucha política y ecológica en un planeta desértico donde una especia controla el universo.
                </p>
                <img src={duneImg} alt="Dune" />
            </div>

            <div>
                <h4>FAHRENHEIT 451 - RAY BRADBURY</h4>
                <p>
                    SINOPSIS: en una sociedad que prohíbe leer, los bomberos queman libros.
                </p>
                <img src={fahrenheitImg} alt="Fahrenheit 451" />
            </div>

            <div>
                <h4>1984 - GEORGE ORWELL</h4>
                <p>
                    SINOPSIS: distopía sobre un régimen totalitario que vigila todos los aspectos de la vida.
                </p>
                <img src={orwellImg} alt="1984" />
            </div>

            <div>
                <h4>UN MUNDO FELIZ - ALDOUS HUXLEY</h4>
                <p>
                    SINOPSIS: sociedad futurista donde la felicidad se impone mediante el control genético y psicológico.
                </p>
                <img src={mundoFelizImg} alt="Un mundo feliz" />
            </div>

            <div>
                <h4>NEUROMANTE - WILLIAM GIBSON</h4>
                <p>
                    SINOPSIS: novela cyberpunk que introdujo el concepto de la matriz (precursora del ciberespacio).
                </p>
                <img src={neuromanteImg} alt="Neuromante" />
            </div>

            <div>
                <h4>LA GUERRA DE LOS MUNDOS - H. G. WELLS</h4>
                <p>
                    SINOPSIS: invasión marciana pone en jaque a la humanidad en la Inglaterra victoriana.
                </p>
                <img src={guerraMundosImg} alt="La guerra de los mundos" />
            </div>
        </div>
    );
};

export default S_CienciaFiccion;