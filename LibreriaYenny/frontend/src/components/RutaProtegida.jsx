// src/components/RutaProtegida.jsx

import { Navigate } from "react-router-dom";
import { useUsuario } from "../context/UsuarioContext";

const RutaProtegida = ({ children }) => {
  const { usuario } = useUsuario();

  if (!usuario?.registrado) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RutaProtegida;