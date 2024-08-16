import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='footer1'>
            <div className='footer-top'>
                <div className='container'>
                    <div className='col1'>
                        <Link to = {'/'} className = 'brand'>SoftCraft</Link> 
                        <ul className='media-icons'>
                            <li>
                                <Link to = {'/'}>
                                    <FaFacebookSquare/>
                                </Link>
                            </li>
                            <li>
                                <Link to = {'/'}>
                                    <FaTwitterSquare/>
                                </Link>
                            </li>
                            <li>
                                <Link to = {'/'}>
                                    <FaInstagramSquare/>
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
                        <ul className='menu'>
                            <li>
                                <h4>About</h4>
                            </li>
                            <li>
                                <Link to = {''} >Service</Link>
                            </li>
                            <li>
                                <Link to = {''} >trabajos</Link>
                            </li>
                            <li>
                                <Link to = {''} >Precios</Link>
                            </li>
                            <li>
                                <Link to = {''} >Contactos</Link>
                            </li>
                            <li>
                                <Link to = {''} >Carrera</Link>
                            </li>
                        </ul>
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
                                <Link to={''}>Sales</Link>
                            </li>
                            <li>
                                <Link to={''}>Advertise</Link>
                            </li>
                            <li>
                                <Link to={''}>Location</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col3'>
                        <h4>Additional Info</h4>
                        <p>Lorem ipsum cuantos hay para 
                        seguir haciendo el siguiente proyecto 
                        Lorem ipsum cuantos hay para seguir
                         haciendo el siguiente proyecto </p>
                    </div>
                </div>
                <div className='footer-buttom'>
                    <div className='container'>
                        <p>
                            Lorem ipsum dolor sit amme
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
