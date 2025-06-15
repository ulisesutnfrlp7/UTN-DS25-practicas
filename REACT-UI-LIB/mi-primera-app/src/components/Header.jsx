import logoYenny from '../assets/images/yenny-el-ateneo.jpg';

const Header = () => {
    return (
        <header className="bg-dark text-white py-4">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                <h1 className="mb-3 mb-md-0 text-center text-md-start" style={{ fontFamily: 'Impact, sans-serif', fontSize: '3rem' }}>
                    LIBRERÍA YENNY
                </h1>
                <img src={logoYenny} alt="Librería Yenny" style={{ height: '70px' }} />
            </div>
        </header>
    );
};

export default Header;