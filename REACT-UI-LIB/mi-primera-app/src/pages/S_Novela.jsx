import Libro from '../components/Libro';
import cienImg from '../assets/images/años_soledad.jpg';
import bovaryImg from '../assets/images/madame.jpeg';
import crimenImg from '../assets/images/crimen_y_cast.jpeg';
import hermanosImg from '../assets/images/hermanos.jpg';
import levedadImg from '../assets/images/levedad_del_ser.jpeg';
import coleraImg from '../assets/images/el_amor_en_tiempos.jpeg';

const S_Novelas = () => {
    return (
        <div className="container py-4">
            <h1 className="mb-4">NUESTRAS NOVELAS...</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col"><Libro titulo="CIEN AÑOS DE SOLEDAD - GABRIEL GARCÍA MÁRQUEZ" sinopsis="Saga familiar que mezcla realismo mágico con historia latinoamericana en el pueblo ficticio de Macondo." imagen={cienImg} /></div>
                <div className="col"><Libro titulo="MADAME BOVARY - GUSTAVE FLAUBERT" sinopsis="Historia de una mujer atrapada entre la rutina del matrimonio y sus sueños románticos." imagen={bovaryImg} /></div>
                <div className="col"><Libro titulo="CRIMEN Y CASTIGO - FIÓDOR DOSTOYEVSKI" sinopsis="Un joven comete un asesinato y se enfrenta a la culpa y el dilema moral de sus actos." imagen={crimenImg} /></div>
                <div className="col"><Libro titulo="LOS HERMANOS KARAMAZOV - FIÓDOR DOSTOYEVSKI" sinopsis="Drama filosófico sobre la fe, la duda y la familia, centrado en un parricidio." imagen={hermanosImg} /></div>
                <div className="col"><Libro titulo="LA INSOPORTABLE LEVEDAD DEL SER - MILAN KUNDERA" sinopsis="Reflexión sobre el amor, la libertad y la existencia durante la Primavera de Praga." imagen={levedadImg} /></div>
                <div className="col"><Libro titulo="EL AMOR EN LOS TIEMPOS DEL CÓLERA - GABRIEL GARCÍA MÁRQUEZ" sinopsis="Dos amantes separados por décadas se reencuentran en la vejez." imagen={coleraImg} /></div>
            </div>
        </div>
    );
};

export default S_Novelas;