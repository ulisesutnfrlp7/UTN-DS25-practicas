import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="flex-1 mt-4 max-w-[45%] flex flex-col space-y-4">
      <div className="flex flex-wrap gap-4">
        <Link to="/novelas" className="inline-block border-[5px] border-black px-3 py-2 text-[27px] font-[Impact] text-brown no-underline">
          SECCIÓN NOVELAS
        </Link>
        <Link to="/ciencia-ficcion" className="inline-block border-[5px] border-black px-3 py-2 text-[27px] font-[Impact] text-brown no-underline">
          SECCIÓN CIENCIA FICCIÓN
        </Link>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link to="/terror" className="inline-block border-[5px] border-black px-3 py-2 text-[27px] font-[Impact] text-brown no-underline">
          SECCIÓN TERROR
        </Link>
        <Link to="/policiales" className="inline-block border-[5px] border-black px-3 py-2 text-[27px] font-[Impact] text-brown no-underline">
          SECCIÓN POLICIALES
        </Link>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link to="/registro" className="inline-block border-[5px] border-black px-3 py-2 text-[27px] font-[Impact] text-brown no-underline">
          REGISTRO
        </Link>
        <Link to="/contacto" className="inline-block border-[5px] border-black px-3 py-2 text-[27px] font-[Impact] text-brown no-underline">
          CONTACTO
        </Link>
        <Link to="/" className="inline-block border-[5px] border-black px-3 py-2 text-[27px] font-[Impact] text-brown no-underline">
          PRINCIPAL
        </Link>
      </div>
    </nav>
  );
};

export default Menu;