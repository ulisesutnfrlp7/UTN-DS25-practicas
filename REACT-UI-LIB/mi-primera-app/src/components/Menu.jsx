import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="bg-light py-4 border-bottom">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 mb-3">
                        <Link to="/novelas" className="btn btn-outline-dark w-100">
                            SECCIÓN NOVELAS
                        </Link>
                        <Link to="/ciencia-ficcion" className="btn btn-outline-dark w-100 mt-2">
                            SECCIÓN CIENCIA FICCIÓN
                        </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                        <Link to="/terror" className="btn btn-outline-dark w-100">
                            SECCIÓN TERROR
                        </Link>
                        <Link to="/policiales" className="btn btn-outline-dark w-100 mt-2">
                            SECCIÓN POLICIALES
                        </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                        <Link to="/registro" className="btn btn-outline-primary w-100">
                            REGISTRO
                        </Link>
                        <Link to="/contacto" className="btn btn-outline-success w-100 mt-2">
                            CONTACTO
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;