// src/pages/S_Terror.jsx
import itImg from '../assets/images/terror_1.jpeg';
import resplandorImg from '../assets/images/terror_2.jpeg';
import frankensteinImg from '../assets/images/terror_3.jpeg';
import draculaImg from '../assets/images/terror_4.jpeg';
import cthulhuImg from '../assets/images/lovecraft.jpg';
import horlaImg from '../assets/images/terror_6.jpeg';

const S_Terror = () => {
    return (
        <div className="libros">
            <h1>NUESTRAS HISTORIAS DE TERROR...</h1>

            <div>
                <h4>IT - STEPHEN KING</h4>
                <p>
                    SINOPSIS: un ente malévolo aterroriza a un grupo de niños en un pueblo de Maine.
                </p>
                <img src={itImg} alt="IT - Stephen King" />
            </div>

            <div>
                <h4>EL RESPLANDOR - STEPHEN KING</h4>
                <p>
                    SINOPSIS: una familia queda aislada en un hotel embrujado durante el invierno.
                </p>
                <img src={resplandorImg} alt="El Resplandor" />
            </div>

            <div>
                <h4>FRANKENSTEIN - MARY SHELLEY</h4>
                <p>
                    SINOPSIS: un científico crea vida y enfrenta las consecuencias de jugar a ser Dios.
                </p>
                <img src={frankensteinImg} alt="Frankenstein" />
            </div>

            <div>
                <h4>DRÁCULA - BRAM STOKER</h4>
                <p>
                    SINOPSIS: el conde Drácula viaja a Inglaterra, propagando el terror y el vampirismo.
                </p>
                <img src={draculaImg} alt="Drácula" />
            </div>

            <div>
                <h4>LA LLAMADA DE CTHULHU - H. P. LOVECRAFT</h4>
                <p>
                    SINOPSIS: horror cósmico sobre una deidad antigua que habita más allá de la razón humana.
                </p>
                <img src={cthulhuImg} alt="La llamada de Cthulhu" />
            </div>

            <div>
                <h4>EL HORLA - GUY DE MAUPASSANT</h4>
                <p>
                    SINOPSIS: relato de un hombre que cree estar siendo acechado por una entidad invisible.
                </p>
                <img src={horlaImg} alt="El Horla" />
            </div>
        </div>
    );
};

export default S_Terror;