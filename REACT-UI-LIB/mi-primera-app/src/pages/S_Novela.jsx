// src/pages/S_Novelas.jsx
import cienImg from '../assets/images/años_soledad.jpg';
import bovaryImg from '../assets/images/madame.jpeg';
import crimenImg from '../assets/images/crimen_y_cast.jpeg';
import hermanosImg from '../assets/images/hermanos.jpg';
import levedadImg from '../assets/images/levedad_del_ser.jpeg';
import coleraImg from '../assets/images/el_amor_en_tiempos.jpeg';

const S_Novelas = () => {
    return (
        <div className="libros">
            <h1>NUESTRAS NOVELAS...</h1>

            <div>
                <h4>CIEN AÑOS DE SOLEDAD - GABRIEL GARCÍA MÁRQUEZ</h4>
                <p>
                    SINOPSIS: saga familiar que mezcla realismo mágico con historia latinoamericana en el pueblo ficticio de Macondo.
                </p>
                <img src={cienImg} alt="Cien años de soledad" />
            </div>

            <div>
                <h4>MADAME BOVARY - GUSTAVE FLAUBERT</h4>
                <p>
                    SINOPSIS: historia de una mujer atrapada entre la rutina del matrimonio y sus sueños románticos.
                </p>
                <img src={bovaryImg} alt="Madame Bovary" />
            </div>

            <div>
                <h4>CRIMEN Y CASTIGO - FIÓDOR DOSTOYEVSKI</h4>
                <p>
                    SINOPSIS: un joven comete un asesinato y se enfrenta a la culpa y el dilema moral de sus actos.
                </p>
                <img src={crimenImg} alt="Crimen y castigo" />
            </div>

            <div>
                <h4>LOS HERMANOS KARAMAZOV - FIÓDOR DOSTOYEVSKI</h4>
                <p>
                    SINOPSIS: drama filosófico sobre la fe, la duda y la familia, centrado en un parricidio.
                </p>
                <img src={hermanosImg} alt="Los hermanos Karamazov" />
            </div>

            <div>
                <h4>LA INSOPORTABLE LEVEDAD DEL SER - MILAN KUNDERA</h4>
                <p>
                    SINOPSIS: reflexión sobre el amor, la libertad y la existencia durante la Primavera de Praga.
                </p>
                <img src={levedadImg} alt="La insoportable levedad del ser" />
            </div>

            <div>
                <h4>EL AMOR EN LOS TIEMPOS DEL CÓLERA - GABRIEL GARCÍA MÁRQUEZ</h4>
                <p>
                    SINOPSIS: dos amantes separados por décadas se reencuentran en la vejez.
                </p>
                <img src={coleraImg} alt="El amor en los tiempos del cólera" />
            </div>
        </div>
    );
};

export default S_Novelas;