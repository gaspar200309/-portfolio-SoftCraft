import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo">
                <i className="fa-brands fa-codepen"></i>
                <h1>Nombre</h1>
            </div>
            <nav id="nav">
                <Link to="/">Inicio</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/habilidades">Habilidades</Link>
                <Link to="/trabajos">Trabajos</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
            <div className="redes">
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
        </header>
    );
}

export default Header;
