import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';

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
                                    <FaXTwitter/>
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
                                <Link to = {'/servicios'} >Services</Link>
                            </li>
                            <li>
                                <Link to = {'/trabajos'} >trabajos</Link>
                            </li>
                            <li>
                                <Link to = {''} >Pricing</Link>
                            </li>
                            <li>
                                <Link to = {'/contacto'} >Contact</Link>
                            </li>
                            <li>
                                <Link to = {''} >Career</Link>
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
                        <p>En softCraft, transformamos ideas en soluciones digitales innovadoras, con precisión y excelencia en cada línea de código. </p>
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
