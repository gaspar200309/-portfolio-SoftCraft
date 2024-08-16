import React from 'react';
import './Habilidades.css';

function Habilidades() {
    return (
        <section className="habilidades" id="habilidades">
        <div className="contenedor-habi">
            <h2>Habilidades</h2>
            <div className="fila">
                <div className="col">
                    <div className="score">
                        <div className="box">
                            <div className="chart" data-percent="95">
                                95%
                            </div>
                            <h2>HTML & CSS</h2>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="score">
                        <div className="box">
                            <div className="chart" data-percent="90">
                                90%
                            </div>
                            <h2>BOOSTRAP</h2>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="score">
                        <div className="box">
                            <div className="chart" data-percent="85">
                                85%
                            </div>
                            <h2>JAVASCRIPT</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fila">
                <div className="col">
                    <div className="score">
                        <div className="box">
                            <div className="chart" data-percent="70">
                                70%
                            </div>
                            <h2>MYSQL</h2>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="score">
                        <div className="box">
                            <div className="chart" data-percent="90">
                                90%
                            </div>
                            <h2>PHP</h2>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="score">
                        <div className="box">
                            <div className="chart" data-percent="90">
                                90%
                            </div>
                            <h2>PHOTOSHOP</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Habilidades;
