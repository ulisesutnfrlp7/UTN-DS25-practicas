const Libro = ({ titulo, sinopsis, imagen }) => {
    return (
      <article className="mb-8 p-4 border border-black rounded-md">
        <h4 className="text-xl font-bold text-brown text-center mb-2">{titulo}</h4>
        <p className="text-[18px] font-semibold font-serif mb-3">
          SINOPSIS: {sinopsis}
        </p>
        <img
          src={imagen}
          alt={titulo}
          className="h-[180px] block mx-auto mt-1"
        />
      </article>
    );
  };
  
  export default Libro;