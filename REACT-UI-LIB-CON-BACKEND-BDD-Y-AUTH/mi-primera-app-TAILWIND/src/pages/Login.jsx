// src/pages/Login.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../context/UsuarioContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUsuario } = useUsuario();

  const [formulario, setFormulario] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = "admin@libreria.com";
    const validPassword = "12345678";

    if (
      formulario.email === validEmail &&
      formulario.password === validPassword
    ) {
      setUsuario({
        nombre: "Admin",
        apellido: "Librería",
        email: validEmail,
        role: "ADMIN",
        registrado: true
      });
      navigate("/home");
    } else {
      setError("CREDENCIALES INVÁLIDAS");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-r from-blue-200 to-indigo-400">
      {/* Mensaje arriba con más separación */}
      <h1 className="text-5xl font-[Impact] text-brown drop-shadow-md mb-16">
        ¡BIENVENIDO!
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white border-[6px] border-black rounded-xl shadow-2xl p-12 space-y-10 text-center transition-all duration-300"
      >
        <h2 className="text-4xl font-[Impact] text-brown drop-shadow-sm tracking-tight">
          Iniciar Sesión
        </h2>

        {error && (
          <p className="text-red-700 bg-red-100 border border-red-300 rounded-md py-3 px-5 font-mono text-[18px] shadow-sm">
            ⚠️ {error}
          </p>
        )}

        <div className="space-y-4">
          <label className="block text-left text-[22px] font-[Impact] text-gray-800">
            Email
            <input
              type="email"
              name="email"
              placeholder="admin@libreria.com"
              value={formulario.email}
              onChange={handleChange}
              className="w-full mt-2 border-[3px] border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3 text-[20px] font-mono shadow-sm"
            />
          </label>
        </div>

        <div className="space-y-4">
          <label className="block text-left text-[22px] font-[Impact] text-gray-800">
            Contraseña
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formulario.password}
              onChange={handleChange}
              className="w-full mt-2 border-[3px] border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3 text-[20px] font-mono shadow-sm"
            />
          </label>
        </div>

        <input
          type="submit"
          value="INGRESAR"
          className="w-full text-[22px] font-[Impact] bg-brown text-white border-[4px] border-black rounded-md px-6 py-4 cursor-pointer hover:bg-black transition duration-300 shadow-md"
        />
      </form>
    </section>
  );
};

export default Login;