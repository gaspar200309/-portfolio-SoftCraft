// src/components/Inicio/Inicio.js
import React from 'react';
import Navbar from '../../components/navar/Navbar';
import Servicios from '../services/Services';
import Habilidades from '../skills/Skills';
import Trabajos from '../jobs/Jobs';
import Contacto from '../contact/Contact';
import ImagenesApp from '../../assets/ImagenesApp';
import './Inicio.css';

function Inicio() {
    return (
        <>
            <span className="sombra">
                <section id="inicio" className="inicio">
                    <div className="contenido">
                        <Navbar />
                        <div className="fila">
                            <div className="col">
                                <h2>Desarrollador Fullstack</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam non quasi deserunt libero iste culpa distinctio iure deleniti ducimus labore sed.</p>
                                <button className="btn btn-1">Descargar CV</button>
                            </div>
                            <div className="col">
                                <div className="contenedor-img">
                                    <img src={ImagenesApp.inicio} alt="Inicio" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </span>
            <Servicios/>
            <Habilidades/>
            <Trabajos/>
            <Contacto/>
        </>
    );
}

export default Inicio;
