// src/components/Libro.jsx

const Libro = ({ titulo, sinopsis, imagen }) => {
  return (
    <article className="w-full max-w-5xl mx-auto p-6 border-2 border-black rounded-md bg-white shadow-md transition-all duration-300 hover:scale-[1.01]">
      <h4 className="text-2xl font-bold font-[Impact] text-brown text-center mb-4 tracking-tight drop-shadow-sm">
        {titulo}
      </h4>
      <p className="text-[18px] font-serif font-semibold text-gray-800 mb-6 text-center leading-relaxed">
        SINOPSIS: {sinopsis}
      </p>
      <img
        src={imagen}
        alt={titulo}
        className="h-[200px] mx-auto border border-gray-300 rounded-md object-contain shadow-sm"
      />
    </article>
  );
};

export default Libro;