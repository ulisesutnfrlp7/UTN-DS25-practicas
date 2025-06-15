import Libro from '../components/Libro';
import rosaImg from '../assets/images/policial_1.jpeg';
import halconImg from '../assets/images/policial_2.jpeg';
import orientImg from '../assets/images/policial_3.jpeg';
import hombresImg from '../assets/images/policial_4.jpeg';
import perdidaImg from '../assets/images/perdida.jpg';
import sabuesoImg from '../assets/images/policial_6.jpeg';

const S_Policial = () => {
    return (
        <div className="container py-4">
            <h1 className="mb-4">NUESTROS POLICIALES...</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col"><Libro titulo="EL NOMBRE DE LA ROSA - UMBERTO ECO" sinopsis="Un monje investiga misteriosas muertes en una abadía medieval." imagen={rosaImg} /></div>
                <div className="col"><Libro titulo="EL HALCÓN MALTÉS - DASHIELL HAMMETT" sinopsis="El detective Sam Spade se ve envuelto en una trama de codicia y traición." imagen={halconImg} /></div>
                <div className="col"><Libro titulo="ASESINATO EN EL ORIENT EXPRESS - AGATHA CHRISTIE" sinopsis="Hércules Poirot resuelve un crimen en un tren repleto de sospechosos." imagen={orientImg} /></div>
                <div className="col"><Libro titulo="LOS HOMBRES QUE NO AMABAN A LAS MUJERES - STIEG LARSSON" sinopsis="Un periodista y una hacker investigan una desaparición que revela oscuros secretos familiares." imagen={hombresImg} /></div>
                <div className="col"><Libro titulo="PERDIDA (GONE GIRL) - GILLIAN FLYNN" sinopsis="Nick Dunne reporta la desaparición de su esposa Amy en su quinto aniversario de bodas." imagen={perdidaImg} /></div>
                <div className="col"><Libro titulo="EL SABUESO DE LOS BASKERVILLE - ARTHUR CONAN DOYLE" sinopsis="Sherlock Holmes investiga una leyenda sobrenatural en los páramos ingleses." imagen={sabuesoImg} /></div>
            </div>
        </div>
    );
};

export default S_Policial;