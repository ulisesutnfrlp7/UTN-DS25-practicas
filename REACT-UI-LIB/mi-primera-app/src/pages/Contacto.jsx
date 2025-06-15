const Contacto = () => {
    return (
        <div className="container py-4">
            <h2 className="mb-4">Contacto</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Fabricio" />
                </div>

                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" placeholder="Pérez" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="fabriper@gmail.com" />
                </div>

                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea
                        className="form-control"
                        id="mensaje"
                        placeholder="Dejá tu mensaje y te contactaremos a la brevedad..."
                        maxLength="200"
                        minLength="15"
                        rows="4"
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">ENVIAR</button>
            </form>
        </div>
    );
};

export default Contacto;