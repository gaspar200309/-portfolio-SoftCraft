import React, { useState } from 'react';
import './Trabajos.css';
import ImagenesApp from '../../assets/ImagenesApp';

const trabajosData = [
    { id: 1, categoria: 'disenio', img: ImagenesApp.trabajo1, titulo: 'Qatar Desing', tecnologias: ['html', 'css', 'javascript'] },
    { id: 2, categoria: 'programacion', img: ImagenesApp.trabajo2, titulo: 'Página Web', tecnologias: ['html', 'css', 'javascript'] },
    { id: 3, categoria: 'animaciones', img: ImagenesApp.trabajo3, titulo: 'Animación Interactiva', tecnologias: ['html', 'css', 'javascript'] },
    { id: 4, categoria: 'disenio', img: ImagenesApp.trabajo4, titulo: 'Galaxias', tecnologias: ['html', 'css', 'javascript'] },
    { id: 5, categoria: 'animaciones', img: ImagenesApp.trabajo5, titulo: 'Animacion de Amor', tecnologias: ['html', 'css', 'javascript'] },
    { id: 6, categoria: 'programacion', img: ImagenesApp.trabajo6, titulo: 'React App', tecnologias: ['html', 'css', 'javascript'] },
    { id: 7, categoria: 'disenio', img: ImagenesApp.trabajo7, titulo: 'HTML & CSS Desing', tecnologias: ['html', 'css', 'javascript'] },
    { id: 8, categoria: 'programacion', img: ImagenesApp.trabajo8, titulo: 'User APP', tecnologias: ['html', 'css', 'javascript'] },
    { id: 9, categoria: 'programacion', img: ImagenesApp.trabajo9, titulo: 'Tech App', tecnologias: ['html', 'css', 'javascript'] },
];

function Trabajos() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

    const filtrarTrabajos = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    const trabajosFiltrados = categoriaSeleccionada === 'todos'
        ? trabajosData
        : trabajosData.filter(trabajo => trabajo.categoria === categoriaSeleccionada);

    return (
        <section className="trabajos" id="trabajos">
            <h2>Mis Trabajos</h2>
            <nav>
            <button className={`${categoriaSeleccionada === 'todos' ? 'borde active' : ''}`} onClick={() => filtrarTrabajos('todos')}>Todos</button>
            <button className={`${categoriaSeleccionada === 'disenio' ? 'borde active' : ''}`} onClick={() => filtrarTrabajos('disenio')}>Diseño</button>
            <button className={`${categoriaSeleccionada === 'programacion' ? 'borde active' : ''}`} onClick={() => filtrarTrabajos('programacion')}>Programación</button>
            <button className={`${categoriaSeleccionada === 'animaciones' ? 'borde active' : ''}`} onClick={() => filtrarTrabajos('animaciones')}>Animaciones</button>

            </nav>

            <div className="galeria">
                {trabajosFiltrados.map(trabajo => (
                    <div key={trabajo.id} className={`item ${trabajo.categoria}`}>
                        <img src={trabajo.img} alt={trabajo.titulo} />
                        <div className="info">
                            <h3>{trabajo.titulo}</h3>
                            {trabajo.tecnologias.map((tec, index) => <span key={index}>{tec}</span>)}
                            <a href="#">Ver Trabajo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Trabajos;
