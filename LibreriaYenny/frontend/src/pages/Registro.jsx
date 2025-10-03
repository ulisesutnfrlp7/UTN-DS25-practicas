// src/pages/Registro.jsx

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registroSchema } from "../validations/registroSchema";
import { useUsuario } from "../context/UsuarioContext";
import { useConfirmacion } from "../hooks/useConfirmacion";
import { createUser } from "../api/api";
import { getToken } from "../helpers/auth";
import { useState } from "react";

const Registro = () => {
  const { usuario } = useUsuario();
  const { visible: confirmacion, activar: mostrarConfirmacion } = useConfirmacion();
  const [errorPermiso, setErrorPermiso] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registroSchema),
  });

  const onSubmit = async (datos) => {
    try {
      const token = getToken();
      const payload = {
        nombre: datos.nombre,
        apellido: datos.apellido,
        email: datos.email,
        password: datos.contraseña,
        sexo: datos.sexo === "masculino" ? "Masculino" : "Femenino",
        temaFavorito: datos.temaFavorito,
      };
      await createUser(payload, token);
      mostrarConfirmacion();
      reset();
    } catch (error) {
      console.error("❌ Error en el registro:", error.message);
    }
  };

  // Envolvemos el submit para chequear permisos ANTES de validar
  const handleCheckPermiso = (e) => {
    e.preventDefault();
    if (usuario.role !== "ADMIN") {
      setErrorPermiso("NO TENÉS PERMISO PARA REGISTRAR USUARIOS");
      return;
    }
    // si tiene permiso -> corre Yup + onSubmit
    handleSubmit(onSubmit)(e);
  };

  return (
    <section className="flex justify-center items-center px-6 py-24">
      <form
        onSubmit={handleCheckPermiso}
        className="w-full max-w-3xl space-y-12 text-[34px] font-[Impact] text-center"
      >
        {/* Nombre */}
        <label className="block text-[40px]">
          Nombre
          <input
            {...register("nombre")}
            placeholder="Fabricio"
            className="w-full text-[24px] font-mono border-2 border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3"
          />
          {errors.nombre && <p className="text-red-600 text-sm mt-1">{errors.nombre.message}</p>}
        </label>

        {/* Apellido */}
        <label className="block text-[40px]">
          Apellido
          <input
            {...register("apellido")}
            placeholder="Pérez"
            className="w-full text-[24px] font-mono border-2 border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3"
          />
          {errors.apellido && <p className="text-red-600 text-xs mt-1">{errors.apellido.message}</p>}
        </label>

        {/* Email */}
        <label className="block text-[40px]">
          Email
          <input
            type="email"
            {...register("email")}
            placeholder="fabriper@gmail.com"
            className="w-full text-[24px] font-mono border-2 border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
        </label>

        {/* Contraseña */}
        <label className="block text-[40px]">
          Contraseña
          <input
            type="password"
            {...register("contraseña")}
            placeholder="********"
            className="w-full text-[24px] font-mono border-2 border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3"
          />
          {errors.contraseña && <p className="text-red-600 text-sm mt-1">{errors.contraseña.message}</p>}
        </label>

        {/* Sexo */}
        <label className="block text-[40px]">
          Sexo
          <span className="flex justify-center gap-8 text-[24px] font-mono mt-2">
            <label>
              <input type="radio" value="masculino" {...register("sexo")} /> Masculino
            </label>
            <label>
              <input type="radio" value="femenino" {...register("sexo")} /> Femenino
            </label>
          </span>
          {errors.sexo && <p className="text-red-600 text-sm mt-1">{errors.sexo.message}</p>}
        </label>

        {/* Tema Favorito */}
        <label className="block text-[40px]">
          Tema Favorito
          <select
            {...register("temaFavorito")}
            className="w-full text-[24px] font-mono border-2 border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3 mt-2"
          >
            <option value="" disabled>SELECCIONE UNA OPCIÓN</option>
            <option value="Novela">Novela</option>
            <option value="Terror">Terror</option>
            <option value="Ciencia Ficción">Ciencia Ficción</option>
            <option value="Policial">Policial</option>
          </select>
          {errors.temaFavorito && <p className="text-red-600 text-sm mt-1">{errors.temaFavorito.message}</p>}
        </label>

        {/* Submit */}
        <input
          type="submit"
          value="ENVIAR"
          className="text-[25px] border-[4px] border-black rounded-md px-10 py-5 cursor-pointer hover:bg-black hover:text-white transition duration-300"
        />

        {/* Confirmación */}
        {confirmacion && (
          <p className="text-[18px] text-green-700 bg-green-100 rounded-md py-2 px-4 mt-4 shadow-md font-mono transition-opacity duration-500">
            ✅ FORMULARIO ENVIADO CON ÉXITO
          </p>
        )}

        {/* Permiso */}
        {errorPermiso && (
          <p className="bg-red-100 text-red-800 rounded-md py-3 px-6 text-[18px] font-mono shadow-md">
            ⚠️ {errorPermiso}
          </p>
        )}
      </form>
    </section>
  );
};

export default Registro;