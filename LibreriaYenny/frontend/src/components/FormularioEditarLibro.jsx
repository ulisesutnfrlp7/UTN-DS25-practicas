// src/components/FormularioEditarLibro.jsx

import { useState, useEffect } from "react";
import { getAuthors, createAuthor } from "../api/api";
import { supabase } from "../api/supabaseClient";
import { useUsuario } from "../context/UsuarioContext";
import { getToken } from "../helpers/auth";

const FormularioEditarLibro = ({ libro, onUpdate, onCancelar }) => {
  const [datos, setDatos] = useState({
    titulo: "",
    sinopsis: "",
    imagen: "",
    categoria: "",
    authorId: "",
  });

  const [autores, setAutores] = useState([]);
  const [nuevoAutor, setNuevoAutor] = useState("");
  const [archivoImagen, setArchivoImagen] = useState(null);
  const [loadingAutor, setLoadingAutor] = useState(false);
  const{ usuario } = useUsuario();
  const [errorPermiso, setErrorPermiso] = useState("");

  useEffect(() => {
    const cargarAutores = async () => {
      const res = await getAuthors();
      setAutores(res.authors || []);
    };
    cargarAutores();
  }, []);

  useEffect(() => {
    if (libro) {
      setDatos({
        titulo: libro.title || "",
        sinopsis: libro.description || "",
        imagen: libro.image || "",
        categoria: libro.categoria || "",
        authorId: libro.authorId || "",
      });
    }
  }, [libro]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      setArchivoImagen(archivo);
      const urlTemporal = URL.createObjectURL(archivo);
      setDatos((prev) => ({ ...prev, imagen: urlTemporal }));
    }
  };

  const subirImagenSiExiste = async () => {
    if (!archivoImagen) return datos.imagen;

    const nombreArchivo = `${Date.now()}_${archivoImagen.name}`;
    const { error } = await supabase.storage
      .from("libros")
      .upload(nombreArchivo, archivoImagen);

    if (error) throw error;

    return supabase.storage
      .from("libros")
      .getPublicUrl(nombreArchivo).data.publicUrl;
  };

  const agregarAutor = async () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = getToken();

    if (usuario.role !== "ADMIN") {
      setErrorPermiso("NO TENÉS PERMISO PARA MODIFICAR LIBROS");
      return;
    }

    const { titulo, sinopsis, imagen, categoria, authorId } = datos;

    if (!titulo || !sinopsis || !imagen || !categoria || !authorId) return;

    try {
      const urlFinal = await subirImagenSiExiste();

      await onUpdate({
        id: libro.id,
        title: titulo,
        description: sinopsis,
        image: urlFinal,
        categoria,
        authorId: Number(authorId),
      }, token);
    } catch (error) {
      console.error("❌ Error al modificar libro:", error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl px-6 py-10 space-y-10 text-center"
      >
        <h2 className="text-4xl font-[Impact] text-center">EDITAR LIBRO</h2>

        <label className="block text-[24px] font-[Impact] text-brown">
          Título
          <input
            type="text"
            name="titulo"
            value={datos.titulo}
            onChange={handleChange}
            placeholder="EJ. HARRY POTTER Y LA PIEDRA FILOSOFAL"
            className="mt-2 w-full px-5 py-3 text-[18px] font-mono border-2 border-black rounded-md"
          />
        </label>

        <div className="grid grid-cols-1 gap-3">
          <label className="block text-[24px] font-[Impact] text-brown">
            Autor
            <select
              name="authorId"
              value={datos.authorId}
              onChange={handleChange}
              className="mt-2 w-full px-5 py-3 text-[18px] font-mono border-2 border-black rounded-md"
            >
              <option value="" disabled>
                SELECCIONE UN AUTOR
              </option>
              {autores.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </label>

          <div className="text-left">
            <p className="text-[16px] font-[Impact] text-brown mb-2">
              ¿NO ESTÁ EL AUTOR?
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={nuevoAutor}
                onChange={(e) => setNuevoAutor(e.target.value)}
                placeholder="NOMBRE DEL NUEVO AUTOR..."
                className="flex-1 px-4 py-2 border-2 border-black rounded-md"
              />
              <button
                onClick={agregarAutor}
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition disabled:opacity-60"
                disabled={loadingAutor}
              >
                {loadingAutor ? "AGREGANDO..." : "AGREGAR"}
              </button>
            </div>
          </div>
        </div>

        <label className="block text-[24px] font-[Impact] text-brown">
          Sinopsis
          <textarea
            name="sinopsis"
            value={datos.sinopsis}
            onChange={handleChange}
            placeholder="BREVE DESCRIPCIÓN DEL LIBRO..."
            className="mt-2 w-full h-32 px-5 py-3 text-[18px] font-mono border-2 border-black rounded-md resize-none"
          />
        </label>

        <label className="block text-[24px] font-[Impact] text-brown">
          Categoría o Género Principal
          <select
            name="categoria"
            value={datos.categoria}
            onChange={handleChange}
            className="mt-2 w-full px-5 py-3 text-[18px] font-mono border-2 border-black rounded-md"
          >
            <option value="" disabled>
              SELECCIONE UNA OPCIÓN
            </option>
            <option value="Novela">Novela</option>
            <option value="Terror">Terror</option>
            <option value="CienciaFiccion">Ciencia Ficción</option>
            <option value="Policial">Policial</option>
          </select>
        </label>

        <label className="block text-[24px] font-[Impact] text-brown">
          Imagen
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="mt-2 w-full text-sm font-mono border-2 border-black rounded-md px-4 py-2 bg-white cursor-pointer"
          />
        </label>

        {datos.imagen && !archivoImagen && (
          <div className="mt-4">
            <p className="text-[16px] font-[Impact] text-brown mb-2">
              IMAGEN ACTUAL:
            </p>
            <img
              src={datos.imagen}
              alt="Vista previa"
              className="max-w-xs mx-auto border-2 border-black rounded-md"
            />
          </div>
        )}

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="w-full py-4 bg-green-600 text-white text-[20px] font-[Impact] rounded-md hover:bg-green-700 transition"
          >
            ACTUALIZAR LIBRO
          </button>
          <button
            type="button"
            onClick={onCancelar}
            className="w-full py-4 bg-red-600 text-white text-[20px] font-[Impact] rounded-md hover:bg-red-700 transition"
          >
            CANCELAR
          </button>
        </div>
      </form>

      {errorPermiso && (
        <p className="mt-8 text-center text-[20px] font-[Impact] text-green-700 bg-green-100 rounded-md py-3 px-5 max-w-lg mx-auto shadow-md transition-opacity">
          ⚠️ {errorPermiso}
        </p>
      )}
    </>
  );
};

export default FormularioEditarLibro;