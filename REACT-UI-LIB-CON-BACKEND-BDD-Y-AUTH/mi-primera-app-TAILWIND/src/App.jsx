// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contenido from './components/Contenido';
import RutaProtegida from './components/RutaProtegida';
import Contacto from './pages/Contacto';
import Registro from './pages/Registro';
import SeccionLibros from './pages/SeccionLibros';
import Catalogo from './pages/Catalogo';
import Login from './pages/Login';
import { UsuarioProvider } from './context/UsuarioContext';

function App() {
    return (
    <UsuarioProvider>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route 
                        path="/home" 
                        element={
                            <RutaProtegida>
                                <Contenido />
                            </RutaProtegida>
                        }
                    />

                    <Route 
                        path="/registro" 
                        element={
                            <RutaProtegida>
                                <Registro />
                            </RutaProtegida>
                        }
                    />

                    <Route 
                        path="/contacto" 
                        element={
                            <RutaProtegida>
                                <Contacto />
                            </RutaProtegida>
                        }
                    />

                    <Route 
                        path="/:categoria" 
                        element={
                            <RutaProtegida>
                                <SeccionLibros />
                            </RutaProtegida>
                        }
                    />

                    <Route 
                        path="/catalogo" 
                        element={
                            <RutaProtegida>
                                <Catalogo />
                            </RutaProtegida>
                        }
                    />
                </Routes>
            </Layout>
        </Router>
    </UsuarioProvider>
    );
}

export default App;