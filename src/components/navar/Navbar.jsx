// src/components/Navbar/Navbar.js
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
                <a href="/">Inicio</a>
                <a href="#servicios">Servicios</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#trabajos">Trabajos</a>
                <a href="#contacto">Contacto</a>
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
