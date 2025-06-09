// src/components/Layout.jsx
import Header from './Header';
import Menu from './Menu';
import Contenido from './Contenido';
import Footer from './Footer';
import '../App.css';

const Layout = () => {
    return (
        <div id="contenedor">
            <header>
                <Header />
            </header>
            <nav>
                <Menu />
            </nav>
            <main>
                <Contenido />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;