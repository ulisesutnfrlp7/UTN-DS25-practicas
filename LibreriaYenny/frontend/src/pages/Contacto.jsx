// src/pages/Contacto.jsx

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactoSchema } from "../validations/contactoSchema";
import { useUsuario } from "../context/UsuarioContext";
import { useConfirmacion } from "../hooks/useConfirmacion";
import { sendMessage } from "../api/api";

const Contacto = () => {
  const { usuario } = useUsuario();
  const { visible: confirmacion, activar: mostrarConfirmacion } = useConfirmacion();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactoSchema),
  });

  const onSubmit = async (datos) => {
    try {
      const payload = {
        ...datos,
        userId: usuario.id,
      };
      const data = await sendMessage(payload);
      console.log("✅ Mensaje enviado:", data);
      mostrarConfirmacion();
      reset();
    } catch (error) {
      console.error("❌ Error en el envío:", error.message);
    }
  };

  const usuarioRegistrado = usuario.registrado === true;

  return (
    <section className="flex justify-center items-center px-6 py-24">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl space-y-12 text-[34px] font-[Impact] text-center">
        {usuarioRegistrado && (
          <p className="text-[22px] text-green-800 bg-green-100 rounded-md py-3 px-6 shadow-md mb-6">
            GRACIAS POR CONTACTARTE, <span className="font-bold">{usuario.nombre}</span>
          </p>
        )}

        {/* Nombre */}
        <label className="block text-[40px]">
          Nombre
          <input
            {...register("nombre")}
            placeholder="Fabricio"
            className="w-full text-[24px] font-mono border-2 border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3"
          />
          {errors.nombre && <p className="text-red-600 text-xs mt-1">{errors.nombre.message}</p>}
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
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
        </label>

        {/* Mensaje */}
        <label className="block text-[40px]">
          Mensaje
          <textarea
            {...register("mensaje")}
            placeholder="Dejá tu mensaje y te contactaremos a la brevedad..."
            maxLength="200"
            className="w-[700px] mx-auto block h-[200px] text-[24px] font-mono border-[2.4px] border-black border-l-[10px] border-gray-400 rounded-md px-6 py-4 resize-none"
          ></textarea>
          {errors.mensaje && <p className="text-red-600 text-xs mt-1">{errors.mensaje.message}</p>}
        </label>

        {/* Submit */}
        <input
          type="submit"
          value="ENVIAR"
          className="text-[30px] border-[4px] border-black rounded-md px-10 py-5 cursor-pointer hover:bg-black hover:text-white transition duration-300"
        />

        {/* Confirmación */}
        {confirmacion && (
          <p className="text-[18px] text-green-700 bg-green-100 rounded-md py-2 px-4 mt-4 shadow-md font-mono transition-opacity duration-500">
            ✅ ¡GRACIAS POR TU MENSAJE! LO RECIBIMOS CORRECTAMENTE
          </p>
        )}
      </form>
    </section>
  );
};

export default Contacto;