import React from 'react';
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
                    <p>micorreo@gmail</p>
                </div>
                <div className="info">
                    <h3>Teléfono:</h3>
                    <p>+55 55555</p>
                </div>
                <div className="info">
                    <h3>País</h3>
                    <p>Argentina</p>
                </div>
                <div className="info">
                    <h3>Ciudad:</h3>
                    <p>San Luis</p>
                </div>
            </div>
            <div className="col">
                <input type="text" placeholder="Nombre..."/>
                <input type="text" placeholder="Correo..."/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <input type="submit" value="Enviar" className="btn"/>
            </div>
        </div>
    </div>
</section>
    );
}

export default Contacto;
