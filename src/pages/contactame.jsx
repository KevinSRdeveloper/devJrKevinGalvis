const ContactamePage = () => {
    return(
        <section className="sect-contactame">
            <article className="art-form">
                <div className="img-form">
                     <i class="bi bi-pin-map-fill"></i>
                     <p>
                        Actualmente me encuentro ubicados en la ciudad de Bogota Dc
                     </p>
                     <a href="#">De Bogotá para el mundo..</a>
                </div>
               
                <div className="img-form">
                     <i class="bi bi-phone-fill"></i>
                     <p>Te comparto aquí abajo mi teléfono si deseas contactarme de manera inmediata. Estoy disponible de 8:00 Am a 6:00 Pm.</p>
                     <a href="#">+57 3142449598</a>
                </div>
               
                <div className="img-form">
                     <i class="bi bi-envelope-paper-fill"></i>
                     <p>
                        Puedes escribirme también a mi correo, especialmente si deseas enviarme algún documento o evidenacia adjunta.
                    </p>
                    <a href="#">kevindevelopersr@outlook.com</a>
                </div>                

            </article>

            <div className="art-container-form">
                <div className="title-form">
                    <h2>Contactame!!</h2>
                </div>
               
                <form action="" className="form">
                    <div className="grupos-form-items">
                        <label htmlFor="">Nombre Completo</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="grupos-form-items">
                        <label htmlFor="">Correo Electronico</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="grupos-form-items">
                        <label htmlFor="">Telefono</label>
                        <input type="number" name="" id="" />
                    </div>
                    <div className="grupos-form-items">
                        <label htmlFor="">Mensaje</label>
                        <textarea name="" id=""></textarea>
                    </div>
                    <div className="grupos-form-buttons">
                        <button type="submit">Enviar</button>
                        <button type="button">Limpiar</button>
                    </div>
                </form>
               
            </div>
           

        </section>
    );
}

export default ContactamePage;