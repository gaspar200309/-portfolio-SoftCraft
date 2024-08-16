import React from 'react';
import './Servicios.css';
import Navbar from '../../components/navar/Navbar';
import { FaCode,FaAndroid,FaLaptop,FaCogs,FaUserPlus,FaConnectdevelop } from 'react-icons/fa';
function Servicios() {
    return (
        <section id="servicios" className="servicios">
        <Navbar />
        <div className="fila">
            <div className="col">
                <div className="card">
                    <div className="icono color1">
                        <div className="circulo">
                            <FaCode/>
                        </div>
                    </div>
                    <h3>Ciberseguridad</h3>
                    <p>¿Cansado de preocuparte por hackers? ¡Protege tu negocio con nuestras soluciones a medida! Realizamos auditorías de seguridad, implementamos firewalls robustos y te brindamos las herramientas necesarias para mantener tus datos a salvo.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="icono color2">
                        <div className="circulo">
                                <FaLaptop/>
                        </div>
                    </div>
                    <h3>Desarrollo Frontend</h3>
                    <p>Crea una primera impresión inolvidable con nuestros diseños web personalizados. Desarrollamos interfaces intuitivas y atractivas que cautivarán a tus usuarios y aumentarán tus conversiones.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="icono color3">
                        <div className="circulo">
                            <FaCogs/>
                        </div>
                    </div>
                    <h3>Desarrollo Backend</h3>
                    <p>Dale vida a tu aplicación con nuestro desarrollo backend sólido y escalable. Optimizamos el rendimiento de tu servidor, garantizamos la seguridad de tus datos y te ofrecemos soluciones personalizadas para tus necesidades específicas.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
        </div>
        <div className="fila">
            <div className="col">
                <div className="card">
                    <div className="icono color1">
                        <div className="circulo">
                            {/* <i className="fa-solid fa-bullhorn"></i> */}
                            <FaAndroid/>
                        </div>
                    </div>
                    <h3>Desarrollo Móvil</h3>
                    <p>Llega a millones de usuarios con nuestras apps móviles nativas e híbridas. Desarrollamos aplicaciones personalizadas para iOS y Android que se adaptan a cualquier dispositivo y sistema operativo.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="icono color2">
                        <div className="circulo">
                            {/* <i className="fa-solid fa-circle-info"></i> */}
                            <FaUserPlus/>
                        </div>
                    </div>
                    <h3>Soporte Clientes</h3>
                    <p>Contamos con un equipo de soporte técnico altamente capacitado para resolver tus dudas y problemas en tiempo récord. Ofrecemos soporte remoto y presencial, así como mantenimiento preventivo para garantizar el correcto funcionamiento de tus sistemas.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="icono color3">
                        <div className="circulo">
                            <FaConnectdevelop/>
                        </div>
                    </div>
                    <h3>DevOps</h3>
                    <p> Optimiza tus procesos de desarrollo y entrega de software con nuestras soluciones DevOps. Automatizamos tus flujos de trabajo, implementamos prácticas de integración continua y despliegue continuo, y te ayudamos a reducir el tiempo de salida al mercado.</p>

                    <a href="#">Leer Más</a>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Servicios;
