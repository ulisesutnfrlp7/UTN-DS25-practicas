import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contenido from './components/Contenido';
import Contacto from './pages/Contacto';
import Registro from './pages/Registro';
import SeccionLibros from './pages/SeccionLibros';
import Catalogo from './pages/Catalogo';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Contenido />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/:categoria" element={<SeccionLibros />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;