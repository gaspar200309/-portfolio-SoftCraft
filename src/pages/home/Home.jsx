import React from 'react';
import { Link } from 'react-router-dom';

import Trabajos from '../jobs/Jobs';
import ImagenesApp from '../../assets/ImagenesApp';
import './Inicio.css';

function Inicio() {
    return (
    <>
            <span className="sombra">
        <section id="inicio" className="inicio">
            <div className="contenido">
                <header>
                    <div className="logo">
                        <i className="fa-brands fa-codepen"></i>
                        <h1>Nombre</h1>
                    </div>
                    <nav id="nav" className="">
                        <Link to="/inicio">Inicio</Link>
                        <Link to="/servicios">Servicios</Link>
                        <Link to="/habilidades">Habilidades</Link>
                        <Link to="/trabajos">Trabajos</Link>
                        <Link to="/contacto">Contacto</Link>
                    </nav>
    
                    <div id="icono-nav" onclick="responsiveMenu()">
                        <i className="fa-solid fa-bars"></i>
                    </div>
    
                    <div className="redes">
                        <Link to="/"><i className="fa-brands fa-twitter"></i></Link>
                        <Link to="/"><i className="fa-brands fa-youtube"></i></Link>
                        <Link to="/"><i className="fa-brands fa-facebook-f"></i></Link>
                    </div>
                </header>
    
                <div className="fila">
                    <div className="col">
                        <h2>Desarrollador Fullstack</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam non quasi deserunt libero iste culpa distinctio iure deleniti ducimus labore sed.</p>
                        <button className="btn btn-1">Descargar CV</button>
                    </div>
                    <div className="col">
                        <div className="contenedor-img">
                            <img src={ImagenesApp.inicio} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </span>
    <Trabajos/>
    </>

    );
}

export default Inicio;
