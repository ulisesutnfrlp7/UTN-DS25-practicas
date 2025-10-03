// src/pages/Login.jsx

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations/loginSchema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../context/UsuarioContext";
import { setToken } from "../helpers/auth";

const Login = () => {
  const navigate = useNavigate();
  const { setUsuario } = useUsuario();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setError("");
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          throw new Error("CREDENCIALES INVÁLIDAS");
        }
        throw new Error(json.error || "Error en login");
      }

      const { user, token } = json.data;

      setToken(token);
      console.log("🧠 Usuario recibido en login:", user);
      setUsuario({ ...user, registrado: true });
      reset();
      setTimeout(() => {
        navigate("/home");
      }, 800);      
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-r from-blue-200 to-indigo-400">
      <h1 className="text-5xl font-[Impact] text-brown drop-shadow-md mb-16">
        ¡BIENVENIDO! - LIBRERÍA YENNY
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
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

        {/* Email */}
        <div className="space-y-4">
          <label className="block text-left text-[22px] font-[Impact] text-gray-800">
            Email
            <input
              type="email"
              placeholder="ADMIN: ulibucchino@gmail.com - USUARIO COMÚN: dbucchino@gmail.com"
              {...register("email")}
              className="w-full mt-2 border-[3px] border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3 text-[20px] font-mono shadow-sm"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </label>
        </div>

        {/* Password */}
        <div className="space-y-4">
          <label className="block text-left text-[22px] font-[Impact] text-gray-800">
            Contraseña
            <input
              type="password"
              placeholder="ADMIN: admin123 - USUARIO COMÚN: 6568DaLi"
              {...register("password")}
              className="w-full mt-2 border-[3px] border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3 text-[20px] font-mono shadow-sm"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
            )}
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-[22px] font-[Impact] bg-brown text-white border-[4px] border-black rounded-md px-6 py-4 cursor-pointer hover:bg-black transition duration-300 shadow-md disabled:opacity-60"
        >
          {isSubmitting ? "INGRESANDO..." : "INGRESAR"}
        </button>
      </form>
    </section>
  );
};

export default Login;