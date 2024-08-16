import React from 'react';
import './Trabajos.css';
import ImagenesApp from '../../assets/ImagenesApp';

function Trabajos() {
    return (
        <section className="trabajos" id="trabajos">
        <h2>Mis Trabajos</h2>

        <nav>
            <a href="javascript:void(0)" className="borde" id="item" onclick="verCategoria('item')">Todos</a>
            <a href="javascript:void(0)" className="" id="disenio" onclick="verCategoria('disenio')">Diseño</a>
            <a href="javascript:void(0)" className="" id="programacion" onclick="verCategoria('programacion')">Programación</a>
            <a href="javascript:void(0)" className="" id="animaciones" onclick="verCategoria('animaciones')">Animaciones</a>
        </nav>

        <div className="galeria">
            <div className="item disenio">
                <img src={ImagenesApp.trabajo1} alt=""/>

                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item programacion">
                <img src={ImagenesApp.trabajo2} alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item animaciones">
                <img src={ImagenesApp.trabajo3} alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item disenio">
                <img src={ImagenesApp.trabajo4} alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item animaciones">
                <img src={ImagenesApp.trabajo5} alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item programacion">
                <img src={ImagenesApp.trabajo6} alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item disenio">
                <img src={ImagenesApp.trabajo7} alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item programacion">
                <img src={ImagenesApp.trabajo8} alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item programacion">
                <img src={ImagenesApp.trabajo9} alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Trabajos;
