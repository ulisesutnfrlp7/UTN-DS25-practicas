const Registro = () => {
    return (
      <section className="flex justify-center items-center px-6 py-24">
        <form className="w-full max-w-3xl space-y-12 text-[34px] font-[Impact] text-center">
          <div className="space-y-6">
            <label className="block text-[40px]">
              Nombre
              <input
                type="text"
                placeholder="Fabri"
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
              Contraseña
              <input
                type="password"
                placeholder="********"
                className="w-full text-[24px] font-mono border-2 border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3"
              />
            </label>
          </div>
  
          <div className="space-y-6">
            <label className="block text-[40px]">
              Sexo
              <span className="flex justify-center gap-8 text-[24px] font-mono mt-2">
                <label>
                  <input type="radio" name="sexo" value="masculino" /> Masculino
                </label>
                <label>
                  <input type="radio" name="sexo" value="femenino" /> Femenino
                </label>
              </span>
            </label>
          </div>
  
          <div className="space-y-6">
            <label className="block text-[40px]">
              Tema Favorito
              <select className="w-full text-[24px] font-mono border-2 border-black border-l-[10px] border-gray-400 rounded-md px-6 py-3 mt-2">
                <option value="op_1">Novela</option>
                <option value="op_2">Terror</option>
                <option value="op_3">Ciencia Ficción</option>
                <option value="op_4">Policial</option>
              </select>
            </label>
          </div>
  
          <div>
            <input
              type="submit"
              value="ENVIAR"
              className="text-[25px] border-[4px] border-black rounded-md px-10 py-5 cursor-pointer hover:bg-black hover:text-white transition duration-300"
            />
          </div>
        </form>
      </section>
    );
  };
  
  export default Registro;