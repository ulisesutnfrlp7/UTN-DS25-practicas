import { Link } from 'react-router-dom';
import LibroDestacado from './LibroDestacado';
import hermanosImg from '../assets/images/hermanos.jpg';
import neuromanteImg from '../assets/images/neuromante.jpg';
import lovecraftImg from '../assets/images/lovecraft.jpg';
import perdidaImg from '../assets/images/perdida.jpg';

const Contenido = () => {
    return (
        <div id="contenido">
            <Link to="/novelas">
                <LibroDestacado
                    titulo="¡NOVELA DESTACADA!"
                    descripcion='"Los hermanos Karamazov" - Fiódor Dostoyevski'
                    imagen={hermanosImg}
                />
            </Link>
            <Link to="/ciencia-ficcion">
                <LibroDestacado
                    titulo="¡SCI-FI DESTACADO!"
                    descripcion='"Neuromante" - William Gibson'
                    imagen={neuromanteImg}
                />
            </Link>
            <Link to="/terror">
                <LibroDestacado
                    titulo="¡TERROR DESTACADO!"
                    descripcion='"La llamada de Cthulhu" - H. P. Lovecraft'
                    imagen={lovecraftImg}
                />
            </Link>
            <Link to="/policiales">
                <LibroDestacado
                    titulo="¡POLICIAL DESTACADO!"
                    descripcion='"Perdida" (Gone Girl) - Gillian Flynn'
                    imagen={perdidaImg}
                />
            </Link>
        </div>
    );
};

export default Contenido;