// src/components/FormularioLibro.jsx

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { libroSchema } from "../validations/libroSchema";
import { useState, useEffect } from "react";
import { createBook, getAuthors, createAuthor } from "../api/api";
import { supabase } from "../api/supabaseClient";
import { useUsuario } from "../context/UsuarioContext";
import { getToken } from "../helpers/auth";

const FormularioLibro = ({ onLibroAgregado }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(libroSchema),
  });

  const [archivoImagen, setArchivoImagen] = useState(null);
  const [autores, setAutores] = useState([]);
  const [nuevoAutor, setNuevoAutor] = useState("");
  const [loadingAutor, setLoadingAutor] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [errorPermiso, setErrorPermiso] = useState("");
  const { usuario } = useUsuario();

  useEffect(() => {
    const cargarAutores = async () => {
      const res = await getAuthors();
      setAutores(res.authors || []);
    };
    cargarAutores();
  }, []);

  const handleImage = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      setArchivoImagen(archivo);
    }
  };

  const agregarAutor = async () => {
    if (usuario.role !== "ADMIN") {
      setErrorPermiso("NO TENÉS PERMISO PARA AGREGAR AUTORES");
      return;
    }
    if (!nuevoAutor.trim()) return;
    setLoadingAutor(true);
    try {
      const token = getToken();
      await createAuthor(nuevoAutor.trim(), token);
      setNuevoAutor("");
      const res = await getAuthors();
      setAutores(res.authors || []);
    } finally {
      setLoadingAutor(false);
    }
  };

  const onSubmit = async (datos) => {
    try {
      if (!archivoImagen) {
        setMensaje("❌ IMAGEN REQUERIDA");
        return;
      }

      const token = getToken();
      const nombreArchivo = `${Date.now()}_${archivoImagen.name}`;
      const { error } = await supabase.storage
        .from("libros")
        .upload(nombreArchivo, archivoImagen);

      if (error) throw error;

      const urlPublica = supabase.storage
        .from("libros")
        .getPublicUrl(nombreArchivo).data.publicUrl;

      await createBook({
        title: datos.titulo,
        description: datos.sinopsis,
        image: urlPublica,
        categoria: datos.categoria,
        authorId: Number(datos.authorId),
      }, token);

      reset();
      setArchivoImagen(null);
      setMensaje("✅ ¡LIBRO AGREGADO CON ÉXITO!");
      onLibroAgregado?.();
      setTimeout(() => setMensaje(""), 2000);
    } catch (error) {
      console.error("❌ Error al agregar libro:", error.message);
      setMensaje("❌ ERROR AL AGREGAR LIBRO");
      setTimeout(() => setMensaje(""), 2000);
    }
  };

  // 🔴 Chequeo de permisos antes de validar con Yup
  const handleCheckPermiso = (e) => {
    e.preventDefault();
    if (usuario.role !== "ADMIN") {
      setErrorPermiso("NO TENÉS PERMISO PARA AGREGAR LIBROS");
      return;
    }
    handleSubmit(onSubmit)(e);
  };

  return (
    <>
      <form
        onSubmit={handleCheckPermiso}
        className="w-full max-w-2xl px-6 py-10 space-y-10 text-center"
      >
        <h2 className="text-4xl font-[Impact] text-center">
          AGREGAR NUEVO LIBRO
        </h2>

        {/* Título */}
        <label className="block text-[24px] font-[Impact] text-brown">
          Título
          <input
            {...register("titulo")}
            placeholder="EJ. HARRY POTTER Y LA PIEDRA FILOSOFAL"
            className="mt-2 w-full px-5 py-3 text-[18px] font-mono border-2 border-black rounded-md"
          />
          {errors.titulo && (
            <p className="text-red-600 text-sm mt-1">{errors.titulo.message}</p>
          )}
        </label>

        {/* Autor */}
        <div className="grid grid-cols-1 gap-3">
          <label className="block text-[24px] font-[Impact] text-brown">
            Autor
            <select
              {...register("authorId")}
              className="mt-2 w-full px-5 py-3 text-[18px] font-mono border-2 border-black rounded-md"
            >
              <option value="" disabled>SELECCIONE UN AUTOR</option>
              {autores.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
            </select>
            {errors.authorId && (
              <p className="text-red-600 text-sm mt-1">{errors.authorId.message}</p>
            )}
          </label>

          <div className="text-left">
            <p className="text-[16px] font-[Impact] text-brown mb-2">¿NO ESTÁ EL AUTOR?</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={nuevoAutor}
                onChange={(e) => setNuevoAutor(e.target.value)}
                placeholder="NOMBRE DEL NUEVO AUTOR..."
                className="flex-1 px-4 py-2 border-2 border-black rounded-md"
              />
              <button
                type="button"
                onClick={agregarAutor}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition disabled:opacity-60"
                disabled={loadingAutor}
              >
                {loadingAutor ? 'AGREGANDO...' : 'AGREGAR'}
              </button>
            </div>
          </div>
        </div>

        {/* Sinopsis */}
        <label className="block text-[24px] font-[Impact] text-brown">
          Sinopsis
          <textarea
            {...register("sinopsis")}
            placeholder="BREVE DESCRIPCIÓN DEL LIBRO..."
            className="mt-2 w-full h-32 px-5 py-3 text-[18px] font-mono border-2 border-black rounded-md resize-none"
          />
          {errors.sinopsis && (
            <p className="text-red-600 text-sm mt-1">{errors.sinopsis.message}</p>
          )}
        </label>

        {/* Categoría */}
        <label className="block text-[24px] font-[Impact] text-brown">
          Categoría o Género Principal
          <select
            {...register("categoria")}
            className="mt-2 w-full px-5 py-3 text-[18px] font-mono border-2 border-black rounded-md"
          >
            <option value="" disabled>SELECCIONE UNA OPCIÓN</option>
            <option value="Novela">Novela</option>
            <option value="Terror">Terror</option>
            <option value="CienciaFiccion">Ciencia Ficción</option>
            <option value="Policial">Policial</option>
          </select>
          {errors.categoria && (
            <p className="text-red-600 text-sm mt-1">{errors.categoria.message}</p>
          )}
        </label>

        {/* Imagen */}
        <label className="block text-[24px] font-[Impact] text-brown">
          Imagen
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="mt-2 w-full text-sm font-mono border-2 border-black rounded-md px-4 py-2 bg-white cursor-pointer"
          />
        </label>

        <button
          type="submit"
          className="w-full py-4 mt-6 bg-brown text-white text-[20px] font-[Impact] rounded-md hover:bg-black transition"
        >
          AGREGAR LIBRO
        </button>
      </form>

      {mensaje && (
        <div className="mt-8 text-center text-[20px] font-[Impact] text-green-700 bg-green-100 rounded-md py-3 px-5 max-w-lg mx-auto shadow-md transition-opacity duration-500">
          {mensaje}
        </div>
      )}

      {errorPermiso && (
        <p className="mt-8 text-center text-[20px] font-[Impact] text-red-700 bg-red-100 rounded-md py-3 px-5 max-w-lg mx-auto shadow-md transition-opacity">
          ⚠️ {errorPermiso}
        </p>
      )}
    </>
  );
};

export default FormularioLibro;