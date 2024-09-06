import React, { useState } from 'react';
import './Servicios.css';
import CustomModal from './CustomModal';
import frontend from "../../../src/assets/img/frontend.jpg"
import backend from "../../assets/img/backend2.jpg"
import mobileDev from "../../assets/img/mobileDev.jpg"
import ai from "../../assets/img/AI.jpg"
import devOps from "../../assets/img/devops.jpg"
import frontendSide from "../../../src/assets/img/frontendOP1.jpg"
import backendSide from "../../../src/assets/img/backendOP1.jpg"
import movilSide from "../../../src/assets/img/movilOP1.jpg"
import aiSide from "../../../src/assets/img/aiOP1.jpg"
import devOpsSide from "../../../src/assets/img/devopsOP1.jpg"
import techServiceSide from "../../../src/assets/img/techserviceOP1.jpg"
import techSupport from "../../../src/assets/img/techSupport.jpg"

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
                    {/* <a href="#" onClick={(event) => handleShowModal(
                            event,
                            'Desarrollo Frontend',
                            [
                                'En SoftCraft, comprendemos que la primera impresión lo es todo. La experiencia del usuario es la clave para atraer y retener a los clientes, y nuestro equipo de desarrollo frontend se dedica a crear interfaces que no solo son visualmente impresionantes, sino también intuitivas y funcionales. Utilizamos las últimas tecnologías como React.js, Angular, y Vue.js para diseñar aplicaciones web que ofrecen una experiencia de usuario fluida y sin interrupciones. Nuestros desarrolladores trabajan en estrecha colaboración con diseñadores gráficos para garantizar que cada pixel y cada interacción estén optimizados para la máxima efectividad. Además de la estética, nos enfocamos en la accesibilidad, asegurando que nuestras soluciones sean utilizables por personas con diversas capacidades. Desde la optimización del rendimiento para garantizar tiempos de carga rápidos hasta la implementación de mejores prácticas de SEO para mejorar la visibilidad en los motores de búsqueda, SoftCraft se compromete a transformar tu visión en una plataforma digital atractiva y funcional que impulse tu negocio hacia el éxito.' 
                            ],
                            [{ src: frontendSide, alt: 'Frontend Development' }]
                        )}>Leer Más</a> */}
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className='img-container'>
                        <img src= {backend} alt="" className='image-card'/>
                    </div>
                    <h3>Desarrollo Backend</h3>
                    <p>Dale vida a tu aplicación con nuestro desarrollo backend sólido y escalable. Optimizamos el rendimiento de tu servidor, garantizamos la seguridad de tus datos y te ofrecemos soluciones personalizadas para tus necesidades específicas.</p>
                    {/* <a href="#" onClick={(event) => handleShowModal(
                        event,
                        'Desarrollo Backend',
                        [
                            'El backend es la columna vertebral de cualquier aplicación o sitio web, y en SoftCraft, estamos especializados en la construcción de sistemas backend robustos, escalables y seguros. Nos enorgullecemos de nuestra capacidad para desarrollar soluciones personalizadas que se adapten a las necesidades específicas de cada cliente, utilizando una variedad de tecnologías como Node.js, Python, Ruby on Rails, y Java. Nuestro enfoque en la arquitectura modular y la implementación de microservicios permite a las aplicaciones manejar un crecimiento exponencial sin comprometer el rendimiento o la seguridad. Además, entendemos la importancia de la protección de datos en la era digital, por lo que implementamos las mejores prácticas de ciberseguridad en cada capa de nuestros sistemas backend. Desde la integración de bases de datos y la gestión de APIs hasta la creación de sistemas de autenticación y autorización personalizados, SoftCraft está equipado para ofrecer soluciones backend que son tan poderosas como flexibles, asegurando que tu infraestructura tecnológica pueda crecer al ritmo de tu negocio.'
                        ],
                        [{ src: backendSide, alt: 'Frontend Development' }]
                    )}>Leer Más</a> */}
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className='img-container'>
                        <img src= {mobileDev} alt="" className='image-card'/>
                    </div>
                    <h3>Desarrollo Móvil</h3>
                    <p>Llega a millones de usuarios con nuestras apps móviles nativas e híbridas. Desarrollamos aplicaciones personalizadas para iOS y Android que se adaptan a cualquier dispositivo y sistema operativo.</p>
                    {/* <a href="#" onClick={(event) => handleShowModal(
                            event,
                            'Desarrollo Móvil',
                            [
                                'En el mundo actual, donde los dispositivos móviles son el principal punto de acceso a Internet para millones de personas, contar con una aplicación móvil bien diseñada no es solo una ventaja, sino una necesidad. En SoftCraft, nos especializamos en el desarrollo de aplicaciones móviles nativas e híbridas, utilizando plataformas como React Native, Flutter, Swift y Kotlin. Entendemos que cada negocio tiene necesidades únicas, y nuestras soluciones están diseñadas para reflejar la identidad de tu marca mientras ofrecen una experiencia de usuario excepcional. Nos enfocamos en desarrollar aplicaciones que no solo funcionen bien, sino que también ofrezcan un rendimiento óptimo, sean seguras y sean fáciles de mantener. Desde aplicaciones empresariales complejas hasta aplicaciones de comercio electrónico y plataformas de redes sociales, nuestro equipo tiene la experiencia y el conocimiento para llevar tu idea desde la conceptualización hasta el lanzamiento. Además, proporcionamos soporte continuo y actualizaciones regulares para asegurarnos de que tu aplicación se mantenga relevante y funcione de manera óptima a medida que evolucionan las necesidades de tus usuarios y la tecnología.'
                            ],
                            [{ src: movilSide, alt: 'Mobile Development' }]
                        )}>Leer Más</a> */}
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

                    {/* <a href="#" onClick={(event) => handleShowModal(
                            event,
                            'Inteligencia Artificial',
                            [
                                'La inteligencia artificial (IA) no es solo una tendencia, es el futuro del negocio, y en SoftCraft, estamos comprometidos a ayudarte a estar a la vanguardia de esta revolución tecnológica. Nuestras soluciones de IA están diseñadas para resolver problemas complejos, mejorar la eficiencia operativa y proporcionar una ventaja competitiva a través de la automatización y la toma de decisiones basada en datos. Desde la creación de modelos de machine learning personalizados hasta la implementación de algoritmos de procesamiento de lenguaje natural y visión por computadora, nuestro equipo tiene la experiencia para desarrollar aplicaciones que pueden aprender, adaptarse y mejorar con el tiempo. Ya sea que necesites desarrollar un sistema de recomendación, implementar un chatbot inteligente para servicio al cliente, o analizar grandes volúmenes de datos para obtener insights valiosos, estamos aquí para ayudarte a aprovechar al máximo el poder de la IA. Con SoftCraft, puedes transformar datos crudos en decisiones inteligentes, automatizar tareas repetitivas y crear experiencias de cliente personalizadas que impulsan el crecimiento y la lealtad.'
                            ],
                            [{ src: aiSide, alt: 'Artificial Intelligence' }]
                        )}>Leer Más</a> */}
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className='img-container'>
                        <img src= {devOps} alt="" className='image-card'/>
                    </div>
                    <h3>DevOps</h3>
                    <p> Optimiza tus procesos de desarrollo y entrega de software con nuestras soluciones DevOps. Automatizamos tus flujos de trabajo, implementamos prácticas de integración continua y despliegue continuo, y te ayudamos a reducir el tiempo de salida al mercado.</p>
                    {/* <a href="#" onClick={(event) => handleShowModal(
                            event,
                            'DevOps',
                            [
                                'La integración continua y el despliegue continuo son fundamentales para mantener la competitividad en el desarrollo de software, y en SoftCraft, nuestras soluciones DevOps están diseñadas para optimizar cada etapa del ciclo de vida del desarrollo de aplicaciones. Implementamos prácticas de DevOps que mejoran la colaboración entre los equipos de desarrollo y operaciones, reducen el tiempo de lanzamiento al mercado y aumentan la calidad del software. Utilizamos herramientas avanzadas como Docker, Kubernetes, Jenkins y Ansible para automatizar procesos, gestionar configuraciones y asegurar que el código se despliegue de manera consistente y confiable. Nuestro enfoque incluye la creación de pipelines de CI/CD eficientes, la monitorización proactiva del rendimiento de las aplicaciones, y la implementación de prácticas de seguridad desde el inicio del proceso de desarrollo. Con nuestras soluciones DevOps, puedes escalar rápidamente tus operaciones, reducir los tiempos de inactividad y asegurarte de que cada actualización de software sea una mejora real para tus usuarios, sin sacrificar la estabilidad o la seguridad.'
                            ],
                            [{ src: devOpsSide, alt: 'DevOps' }]
                        )}>Leer Más</a> */}
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className='img-container'>
                        <img src= {techSupport} alt="" className='image-card'/>
                    </div>
                    <h3>Servicio Técnico</h3>
                    <p>Confía en SoftCraft para mantener tus sistemas funcionando sin problemas. Ofrecemos soporte técnico integral, desde la resolución de problemas hasta el mantenimiento preventivo, garantizando que tu infraestructura tecnológica esté siempre en óptimas condiciones.</p>
                    {/* <a href="#" onClick={(event) => handleShowModal(
                            event,
                            'Ciberseguridad',
                            [
                                'En un entorno tecnológico en constante evolución, contar con un servicio técnico de confianza es esencial para garantizar el funcionamiento óptimo de tus sistemas y dispositivos. En SoftCraft, ofrecemos un servicio técnico integral que cubre todas las necesidades de tu empresa, desde la resolución de problemas de hardware y software hasta el mantenimiento preventivo y la gestión de redes. Nuestro equipo de técnicos altamente capacitados está disponible para asistir en la configuración de equipos, la instalación de software, la actualización de sistemas operativos, y la solución de problemas técnicos que puedan surgir en el día a día. Además, brindamos soporte remoto y en sitio, garantizando una respuesta rápida y eficiente para minimizar el tiempo de inactividad. También ofrecemos servicios de consultoría para ayudarte a elegir las mejores herramientas y tecnologías que se adapten a tus necesidades específicas. Con SoftCraft, puedes estar seguro de que tu infraestructura tecnológica estará en manos de expertos, permitiéndote concentrarte en tu negocio mientras nosotros nos encargamos del soporte técnico.'
                            ],
                            [{ src: techServiceSide, alt: 'Cybersecurity' }]
                        )}>Leer Más</a> */}
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
