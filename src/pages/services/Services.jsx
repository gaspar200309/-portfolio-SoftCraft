import React from 'react';
import './Servicios.css';

function Servicios() {
    return (
        <section id="servicios" className="servicios">
        <div className="fila">
            <div className="col">
                <div className="card">
                    <div className="icono color1">
                        <div className="circulo">
                            <i className="fa-solid fa-code"></i>
                        </div>
                    </div>
                    <h3>Diseño Web</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore neque ducimus cupiditate, placeat incidunt culpa quis quod distinctio.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="icono color2">
                        <div className="circulo">
                            <i className="fa-solid fa-palette"></i>
                        </div>
                    </div>
                    <h3>Diseño Gráfico</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore neque ducimus cupiditate, placeat incidunt culpa quis quod distinctio.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="icono color3">
                        <div className="circulo">
                            <i className="fa-solid fa-video"></i>
                        </div>
                    </div>
                    <h3>Animaciones</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore neque ducimus cupiditate, placeat incidunt culpa quis quod distinctio.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
        </div>
        <div className="fila">
            <div className="col">
                <div className="card">
                    <div className="icono color1">
                        <div className="circulo">
                            <i className="fa-solid fa-bullhorn"></i>
                        </div>
                    </div>
                    <h3>Marketing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore neque ducimus cupiditate, placeat incidunt culpa quis quod distinctio.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="icono color2">
                        <div className="circulo">
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <h3>Soporte Clientes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore neque ducimus cupiditate, placeat incidunt culpa quis quod distinctio.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="icono color3">
                        <div className="circulo">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                    <h3>Tiendas</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore neque ducimus cupiditate, placeat incidunt culpa quis quod distinctio.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Servicios;
