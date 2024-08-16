import React from 'react';
import './Trabajos.css';

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
                <img src="img/trabajo1.png" alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item programacion">
                <img src="img/trabajo2.png" alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item animaciones">
                <img src="img/trabajo3.png" alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item disenio">
                <img src="img/trabajo4.png" alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item animaciones">
                <img src="img/trabajo5.png" alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item programacion">
                <img src="img/trabajo6.png" alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item disenio">
                <img src="img/trabajo7.png" alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item programacion">
                <img src="img/trabajo8.png" alt=""/>
                <div className="info">
                    <h3>Titulo del Trabajo</h3>
                    <span>html</span><span>css</span><span>javascript</span>
                    <a href="#">Ver Trabajo</a>
                </div>
            </div>
            <div className="item programacion">
                <img src="img/trabajo9.png" alt=""/>
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
