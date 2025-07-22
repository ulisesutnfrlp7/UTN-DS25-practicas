const Contacto = () => {
  return (
    <section className="flex justify-center items-center px-6 py-24">
      <form className="w-full max-w-3xl space-y-12 text-[34px] font-[Impact] text-center">
        <div className="space-y-6">
          <label className="block text-[40px]">
            Nombre
            <input
              type="text"
              placeholder="Fabricio"
              className="w-full text-[24px] font-mono border-2 border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3"
            />
          </label>
        </div>

        <div className="space-y-6">
          <label className="block text-[40px]">
            Apellido
            <input
              type="text"
              placeholder="Pérez"
              className="w-full text-[24px] font-mono border-2 border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3"
            />
          </label>
        </div>

        <div className="space-y-6">
          <label className="block text-[40px]">
            Email
            <input
              type="email"
              placeholder="fabriper@gmail.com"
              className="w-full text-[24px] font-mono border-2 border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3"
            />
          </label>
        </div>

        <div className="space-y-6">
          <label className="block text-[40px]">
            Mensaje
            <textarea
              placeholder="Dejá tu mensaje y te contactaremos a la brevedad..."
              maxLength="200"
              minLength="15"
              className="w-full h-[200px] text-[24px] font-mono border-[2.4px] border-black border-l-[10px] border-gray-400 rounded-md px-6 py-4 resize-none"
            ></textarea>
          </label>
        </div>

        <div>
          <input
            type="submit"
            value="ENVIAR"
            className="text-[30px] border-[4px] border-black rounded-md px-10 py-5 cursor-pointer hover:bg-black hover:text-white transition duration-300"
          />
        </div>
      </form>
    </section>
  );
};

export default Contacto;