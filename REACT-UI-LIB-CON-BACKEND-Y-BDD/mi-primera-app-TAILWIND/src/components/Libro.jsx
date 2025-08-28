// src/components/Libro.jsx

const Libro = ({ id, titulo, autor, sinopsis, categoria, imagen, authorId, onEdit, onDelete }) => {
  return (
    <article className="w-full max-w-5xl mx-auto p-6 border-2 border-black rounded-md bg-white shadow-md transition-all duration-300 hover:scale-[1.01]">
      <h4 className="text-2xl font-bold font-[Impact] text-brown text-center mb-1 tracking-tight drop-shadow-sm">
        {titulo}
      </h4>
      <p className="text-[16px] font-serif text-gray-700 mb-4 text-center">
        {autor ? `por ${autor}` : ''}
      </p>
      <p className="text-[18px] font-serif font-semibold text-gray-800 mb-2 text-center leading-relaxed">
        CATEGORIA / GÉNERO: {categoria}
      </p>
      <p className="text-[18px] font-serif font-semibold text-gray-800 mb-6 text-center leading-relaxed">
        SINOPSIS: {sinopsis}
      </p>
      <img
        src={imagen}
        alt={titulo}
        className="h-[200px] mx-auto border border-gray-300 rounded-md object-contain shadow-sm"
      />
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => onEdit({
            id,
            title: titulo,
            description: sinopsis,
            categoria,
            image: imagen,
            authorId
          })}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition"
        >
          ✏️ EDITAR
        </button>
        <button
          onClick={() => onDelete(id)}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition"
        >
          🗑️ ELIMINAR
        </button>
      </div>
    </article>
  );
};

export default Libro;