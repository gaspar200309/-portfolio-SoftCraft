// src/components/Navbar/Navbar.js
import React from 'react';
import ImagenesApp from '../../assets/ImagenesApp';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube, FaSquareXTwitter } from "react-icons/fa6";
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <div className="logo">
                <img src={ImagenesApp.logo} height='100px' width='100px' alt="Logo"/>
                <h1>SoftCraft</h1>
            </div>
            <nav id="nav" className="">
                <Link to="/">Inicio</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/habilidades">Habilidades</Link>
                <Link to="/trabajos">Trabajos</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>

            <div id="icono-nav" onClick={() => console.log('Responsive Menu')}>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className="redes">
                <Link to="/"><FaSquareXTwitter/></Link>
                <Link to="/"><FaYoutube/></Link>
                <Link to="/"><FaFacebookSquare/></Link>
            </div>
        </header>
    );
}

export default Navbar;
