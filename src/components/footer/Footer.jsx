import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
function Footer() {
    return (
        <footer className='footer1'>
            <div className='footer-top'>
                <div className='container'>
                    <div className='col1'>
                        <Link to = {'/'} className = 'brand'>SoftCraft</Link> 
                        <ul className='media-icons'>
                            <li>
                                <Link to = {'https://www.facebook.com/profile.php?id=100093196947866'}>
                                    <FaFacebookSquare/>
                                </Link>
                            </li>
                            <li>
                                <Link to = {'https://www.instagram.com/armando_gaspar_mamani/'}>
                                    <FaInstagram/>
                                </Link>
                            </li>
                            <li>
                                <Link to = {'/'}>
                                    <FaGithub/>
                                </Link>
                            </li>
                            <li>
                                <Link to = {'/'}>
                                    <FaTiktok/>
                                </Link>
                            </li>
                            <li>
                                <Link to = {'/'}>
                                    <FaWhatsapp/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col2'>
                        <nav id="nav" className="navigation">
                            <a href="/">Inicio</a>
                            <a href="#servicios">Servicios</a>
                            <a href="#habilidades">Habilidades</a>
                            <a href="#trabajos">Trabajos</a>
                            <a href="#contacto">Contacto</a>
                        </nav>
                        <ul className='menu'>
                            <li>
                                <h4>Resoruces</h4>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    Docs
                                </Link>
                                <Link to={'/'}>
                                    Block
                                </Link>
                                <Link to={'/'}>
                                    WEbinars 
                                </Link>
                                <Link to={'/'}>
                                    eBlocks
                                </Link>
                                <Link to={'/'}>
                                    Docs
                                </Link>
                            </li>
                        </ul>
                        <ul className='menu'>
                            <li>
                                <h4>Contact</h4>
                            </li>
                            <li>
                                <Link to={'/'}>Help</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Sales</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Advertise</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Location</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col3'>
                        <h4>Additional Info</h4>
                        <p>En <span className='SC-span'>SoftCraft</span>, transformamos ideas en soluciones digitales innovadoras, con precisión y excelencia en cada línea de código. </p>
                    </div>
                </div>
                <div className='footer-buttom'>
                    <div className='container'>
                        <p>
                            SoftCraft
                            - All rigths reserved
                        </p>
                        <ul className='service-icons'>
                            <li>
                                <Link to={'/'}>
                                    <i></i>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <i></i>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <i></i>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <i></i>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <i></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
