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
        <Routes>
          {/* 🔓 Ruta pública sin Layout */}
          <Route path="/" element={<Login />} />

          {/* 🔐 Rutas protegidas con Layout */}
          <Route
            path="/home"
            element={
              <RutaProtegida>
                <Layout>
                  <Contenido />
                </Layout>
              </RutaProtegida>
            }
          />
          <Route
            path="/registro"
            element={
              <RutaProtegida>
                <Layout>
                  <Registro />
                </Layout>
              </RutaProtegida>
            }
          />
          <Route
            path="/contacto"
            element={
              <RutaProtegida>
                <Layout>
                  <Contacto />
                </Layout>
              </RutaProtegida>
            }
          />
          <Route
            path="/:categoria"
            element={
              <RutaProtegida>
                <Layout>
                  <SeccionLibros />
                </Layout>
              </RutaProtegida>
            }
          />
          <Route
            path="/catalogo"
            element={
              <RutaProtegida>
                <Layout>
                  <Catalogo />
                </Layout>
              </RutaProtegida>
            }
          />
        </Routes>
      </Router>
    </UsuarioProvider>
  );
}

export default App;