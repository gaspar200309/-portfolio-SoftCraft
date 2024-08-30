import './Contacto.css';

function Contacto() {
    return (

    <section className="contacto" id="contacto">
    <div className="contenedor-contacto">
        <h2>Contacto</h2>
        <div className="fila">
            <div className="col">
                <div className="info">
                    <h3>Email:</h3>
                    <p>gaspar123@gmail</p>
                </div>
                <div className="info">
                    <h3>Teléfono:</h3>
                    <p>+591 62982552</p>
                </div>
                <div className="info">
                    <h3>País</h3>
                    <p>Bolivia</p>
                </div>
                <div className="info">
                    <h3>Ciudad:</h3>
                    <p>Cochabamba</p>
                </div>
            </div>
            <div className="col">
                <input type="text" placeholder="Nombre..."/>
                <input type="text" placeholder="Correo..."/>
                <input className='textArea' name="" id="" cols="30" rows="10" placeholder="Mensaje..."></input>
                <button className="btn">Enviar</button>
            </div>
        </div>
    </div>
</section>
    );
}

export default Contacto;
