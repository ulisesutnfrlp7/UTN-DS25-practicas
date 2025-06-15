import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import '../App.css'; // mantené tu CSS si tenés estilos personalizados

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Menu />
            <main className="flex-grow-1">
                <div className="container py-4">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;