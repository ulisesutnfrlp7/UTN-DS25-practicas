import { Link } from "react-router-dom";
import LibroDestacado from "./LibroDestacado";
import hermanosImg from "../assets/images/hermanos.jpg";
import neuromanteImg from "../assets/images/neuromante.jpg";
import lovecraftImg from "../assets/images/lovecraft.jpg";
import perdidaImg from "../assets/images/perdida.jpg";

const Contenido = () => {
  return (
    <div
      id="contenido"
      className="flex-1 max-w-full grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center mx-auto p-5"
    >
      <Link to="/novelas" className="block">
        <LibroDestacado
          titulo="¡NOVELA DESTACADA!"
          descripcion='"Los hermanos Karamazov" - Fiódor Dostoyevski'
          imagen={hermanosImg}
          enlace="#"
        />
      </Link>
      <Link to="/ciencia-ficcion" className="block">
        <LibroDestacado
          titulo="¡SCI-FI DESTACADO!"
          descripcion='"Neuromante" - William Gibson'
          imagen={neuromanteImg}
          enlace="#"
        />
      </Link>
      <Link to="/terror" className="block">
        <LibroDestacado
          titulo="¡TERROR DESTACADO!"
          descripcion='"La llamada de Cthulhu" - H. P. Lovecraft'
          imagen={lovecraftImg}
          enlace="#"
        />
      </Link>
      <Link to="/policiales" className="block">
        <LibroDestacado
          titulo="¡POLICIAL DESTACADO!"
          descripcion='"Perdida" (Gone Girl) - Gillian Flynn'
          imagen={perdidaImg}
          enlace="#"
        />
      </Link>
    </div>
  );
};

export default Contenido;