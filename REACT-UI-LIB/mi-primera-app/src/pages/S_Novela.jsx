import Libro from '../components/Libro';
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

            <Libro
                titulo="CIEN AÑOS DE SOLEDAD - GABRIEL GARCÍA MÁRQUEZ"
                sinopsis="Saga familiar que mezcla realismo mágico con historia latinoamericana en el pueblo ficticio de Macondo."
                imagen={cienImg}
            />
            <Libro
                titulo="MADAME BOVARY - GUSTAVE FLAUBERT"
                sinopsis="Historia de una mujer atrapada entre la rutina del matrimonio y sus sueños románticos."
                imagen={bovaryImg}
            />
            <Libro
                titulo="CRIMEN Y CASTIGO - FIÓDOR DOSTOYEVSKI"
                sinopsis="Un joven comete un asesinato y se enfrenta a la culpa y el dilema moral de sus actos."
                imagen={crimenImg}
            />
            <Libro
                titulo="LOS HERMANOS KARAMAZOV - FIÓDOR DOSTOYEVSKI"
                sinopsis="Drama filosófico sobre la fe, la duda y la familia, centrado en un parricidio."
                imagen={hermanosImg}
            />
            <Libro
                titulo="LA INSOPORTABLE LEVEDAD DEL SER - MILAN KUNDERA"
                sinopsis="Reflexión sobre el amor, la libertad y la existencia durante la Primavera de Praga."
                imagen={levedadImg}
            />
            <Libro
                titulo="EL AMOR EN LOS TIEMPOS DEL CÓLERA - GABRIEL GARCÍA MÁRQUEZ"
                sinopsis="Dos amantes separados por décadas se reencuentran en la vejez."
                imagen={coleraImg}
            />
        </div>
    );
};

export default S_Novelas;