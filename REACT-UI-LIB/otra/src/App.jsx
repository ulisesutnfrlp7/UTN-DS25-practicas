import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contenido from './components/Contenido';
import Contacto from './pages/Contacto';
import Registro from './pages/Registro';
import Novela from './pages/S_Novela';
import CienciaFicción from './pages/S_CienciaFicción';
import Policial from './pages/S_Policial';
import Terror from './pages/S_Terror';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Contenido />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/novelas" element={<Novela />} />
                    <Route path="/ciencia-ficcion" element={<CienciaFicción />} />
                    <Route path="/terror" element={<Terror />} />
                    <Route path="/policiales" element={<Policial />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;