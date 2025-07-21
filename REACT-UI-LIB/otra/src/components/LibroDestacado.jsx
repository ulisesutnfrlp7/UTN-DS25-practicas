const LibroDestacado = ({ titulo, descripcion, imagen, enlace }) => {
    return (
      <article className="mb-10 p-4 border border-black rounded-md">
        <a
          href={enlace}
          className="text-[24px] font-bold text-brown text-center block mb-2 border-[5px] border-black px-4 py-2 w-fit mx-auto"
        >
          {titulo}
        </a>
        <p className="text-[18px] font-serif font-semibold mb-2 text-center">{descripcion}</p>
        <img
          src={imagen}
          alt={titulo}
          className="h-[180px] block mx-auto mt-1"
        />
      </article>
    );
  };
  
  export default LibroDestacado;