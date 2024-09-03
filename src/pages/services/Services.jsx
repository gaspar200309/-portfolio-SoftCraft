import React, { useState } from 'react';
import './Servicios.css';
import CustomModal from './CustomModal';
import ciberseguridad from "../../../src/assets/img/ciberseguridad.png"
import frontend from "../../../src/assets/img/frontend.jpg"
import backend from "../../assets/img/backend2.jpg"
import mobileDev from "../../assets/img/mobileDev.jpg"
import ai from "../../assets/img/AI.jpg"
import devOps from "../../assets/img/devops.jpg"


function Servicios() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: [], images: [] });

    const handleShowModal = (event,title, content, images) => {
        event.preventDefault();
        setModalContent({ title, content, images });
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);
    return (
        <section id="servicios" className="servicios">
        <h1 className='title'>Servicios</h1>
        <div className="fila">
            <div className="col">
                <div className="card">
                    <div className='img-container'>
                        <img src= {frontend} alt="" className='image-card'/>
                    </div>
                    <h3>Desarrollo Frontend</h3>
                    <p>Crea una primera impresión inolvidable con nuestros diseños web personalizados. Desarrollamos interfaces intuitivas y atractivas que cautivarán a tus usuarios y aumentarán tus conversiones.</p>
                    <a href="#" onClick={(event) => handleShowModal(
                            event,
                            'Desarrollo Frontend',
                            [
                                'Crea una primera impresión inolvidable con nuestros diseños web personalizados.',
                                'Desarrollamos interfaces intuitivas y atractivas que cautivarán a tus usuarios y aumentarán tus conversiones.',
                                'Nuestra experiencia en tecnologías modernas como React, Angular y Vue.js garantiza un desarrollo de calidad.'
                            ],
                            [{ src: frontend, alt: 'Frontend Development' }]
                        )}>Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className='img-container'>
                        <img src= {backend} alt="" className='image-card'/>
                    </div>
                    <h3>Desarrollo Backend</h3>
                    <p>Dale vida a tu aplicación con nuestro desarrollo backend sólido y escalable. Optimizamos el rendimiento de tu servidor, garantizamos la seguridad de tus datos y te ofrecemos soluciones personalizadas para tus necesidades específicas.</p>
                    <a href="#" onClick={(event) => handleShowModal(
                        event,
                        'Desarrollo Backend',
                        [
                            'Tienen como objetivo apoyar a nuestros alumnos y graduados a desarrollar y validar una idea de negocio...',
                            'Los participantes desarrollarán una idea de negocio en grupo...'
                        ],
                        [{ src: backend, alt: 'Frontend Development' }]
                    )}>Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className='img-container'>
                        <img src= {mobileDev} alt="" className='image-card'/>
                    </div>
                    <h3>Desarrollo Móvil</h3>
                    <p>Llega a millones de usuarios con nuestras apps móviles nativas e híbridas. Desarrollamos aplicaciones personalizadas para iOS y Android que se adaptan a cualquier dispositivo y sistema operativo.</p>
                    <a href="#" onClick={(event) => handleShowModal(
                            event,
                            'Desarrollo Móvil',
                            [
                                'Llega a millones de usuarios con nuestras apps móviles nativas e híbridas.',
                                'Desarrollamos aplicaciones personalizadas para iOS y Android que se adaptan a cualquier dispositivo y sistema operativo.',
                                'Utilizamos tecnologías como React Native, Flutter, y Swift para garantizar un rendimiento óptimo.'
                            ],
                            [{ src: mobileDev, alt: 'Mobile Development' }]
                        )}>Leer Más</a>
                </div>
            </div>
        </div>
        <div className="fila">
            
            <div className="col">
                <div className="card">
                    <div className='img-container'>
                        <img src= {ai} alt="" className='image-card'/>
                    </div>
                    <h3>Inteligencia Artificial</h3>
                    <p>Nuestras soluciones personalizadas te permiten automatizar procesos, optimizar operaciones y tomar decisiones basadas en datos. Desde la predicción de tendencias hasta la personalización de la experiencia del cliente, nuestra IA te ayudará a alcanzar tus objetivos de negocio.</p>

                    <a href="#" onClick={(event) => handleShowModal(
                            event,
                            'Inteligencia Artificial',
                            [
                                'Nuestras soluciones de IA te permiten automatizar procesos y tomar decisiones basadas en datos.',
                                'Desde la predicción de tendencias hasta la personalización de la experiencia del cliente, nuestra IA te ayudará a alcanzar tus objetivos de negocio.',
                                'Trabajamos con algoritmos de machine learning, procesamiento de lenguaje natural y visión por computadora.'
                            ],
                            [{ src: ai, alt: 'Artificial Intelligence' }]
                        )}>Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className='img-container'>
                        <img src= {devOps} alt="" className='image-card'/>
                    </div>
                    <h3>DevOps</h3>
                    <p> Optimiza tus procesos de desarrollo y entrega de software con nuestras soluciones DevOps. Automatizamos tus flujos de trabajo, implementamos prácticas de integración continua y despliegue continuo, y te ayudamos a reducir el tiempo de salida al mercado.</p>
                    <a href="#" onClick={(event) => handleShowModal(
                            event,
                            'DevOps',
                            [
                                'Optimiza tus procesos de desarrollo y entrega de software con nuestras soluciones DevOps.',
                                'Automatizamos tus flujos de trabajo e implementamos prácticas de integración continua y despliegue continuo.',
                                'Utilizamos herramientas como Docker, Kubernetes, Jenkins, y Ansible para mejorar la eficiencia.'
                            ],
                            [{ src: devOps, alt: 'DevOps' }]
                        )}>Leer Más</a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className='img-container'>
                        <img src= {ciberseguridad} alt="" className='image-card'/>
                    </div>
                    <h3>Ciberseguridad</h3>
                    <p>¿Cansado de preocuparte por hackers? ¡Protege tu negocio con nuestras soluciones a medida! Realizamos auditorías de seguridad, implementamos firewalls robustos y te brindamos las herramientas necesarias para mantener tus datos a salvo.</p>
                    <a href="#" onClick={(event) => handleShowModal(
                            event,
                            'Ciberseguridad',
                            [
                                '¿Cansado de preocuparte por hackers? ¡Protege tu negocio con nuestras soluciones a medida!',
                                'Realizamos auditorías de seguridad, implementamos firewalls robustos y te brindamos las herramientas necesarias para mantener tus datos a salvo.',
                                'Nos especializamos en protección contra amenazas, detección de intrusiones y cumplimiento normativo.'
                            ],
                            [{ src: ciberseguridad, alt: 'Cybersecurity' }]
                        )}>Leer Más</a>
                </div>
            </div>
        </div>
        <CustomModal
                show={showModal}
                onClose={handleCloseModal}
                title={modalContent.title}
                content={modalContent.content}
                images={modalContent.images}
            />
    </section>
    );
}

export default Servicios;
