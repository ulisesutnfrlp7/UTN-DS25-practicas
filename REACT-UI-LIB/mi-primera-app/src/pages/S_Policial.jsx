import rosaImg from '../assets/images/policial_1.jpeg';
import halconImg from '../assets/images/policial_2.jpeg';
import orientImg from '../assets/images/policial_3.jpeg';
import hombresImg from '../assets/images/policial_4.jpeg';
import perdidaImg from '../assets/images/perdida.jpg';
import sabuesoImg from '../assets/images/policial_6.jpeg';

const S_Policial = () => {
    return (
        <div className="libros">
            <h1>NUESTROS POLICIALES...</h1>

            <div>
                <h4>EL NOMBRE DE LA ROSA - UMBERTO ECO</h4>
                <p>
                    SINOPSIS: un monje investiga misteriosas muertes en una abadía medieval.
                </p>
                <img src={rosaImg} alt="El nombre de la rosa" />
            </div>

            <div>
                <h4>EL HALCÓN MALTÉS - DASHIELL HAMMETT</h4>
                <p>
                    SINOPSIS: el detective Sam Spade se ve envuelto en una trama de codicia y traición.
                </p>
                <img src={halconImg} alt="El halcón maltés" />
            </div>

            <div>
                <h4>ASESINATO EN EL ORIENT EXPRESS - AGATHA CHRISTIE</h4>
                <p>
                    SINOPSIS: Hércules Poirot resuelve un crimen en un tren repleto de sospechosos.
                </p>
                <img src={orientImg} alt="Asesinato en el Orient Express" />
            </div>

            <div>
                <h4>LOS HOMBRES QUE NO AMABAN A LAS MUJERES - STIEG LARSSON</h4>
                <p>
                    SINOPSIS: un periodista y un hacker investigan una desaparición que revela oscuros secretos familiares.
                </p>
                <img src={hombresImg} alt="Los hombres que no amaban a las mujeres" />
            </div>

            <div>
                <h4>PERDIDA (GONE GIRL) - GILLIAN FLYNN</h4>
                <p>
                    SINOPSIS: Nick Dunne reporta la desaparición de su esposa Amy en su quinto aniversario de bodas.
                </p>
                <img src={perdidaImg} alt="Perdida" />
            </div>

            <div>
                <h4>EL SABUESO DE LOS BASKERVILLE - ARTHUR CONAN DOYLE</h4>
                <p>
                    SINOPSIS: Sherlock Holmes investiga una leyenda sobrenatural en los páramos ingleses.
                </p>
                <img src={sabuesoImg} alt="El sabueso de los Baskerville" />
            </div>
        </div>
    );
};

export default S_Policial;