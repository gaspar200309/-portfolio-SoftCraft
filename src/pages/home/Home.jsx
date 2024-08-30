// src/components/Inicio/Inicio.js
import Navbar from '../../components/navar/Navbar';
import Servicios from '../services/Services';
import Habilidades from '../skills/Skills';
import Trabajos from '../jobs/Jobs';
import Contacto from '../contact/Contact';
import ImagenesApp from '../../assets/ImagenesApp';

//css
import './Inicio.css';

function Inicio() {
    
    const openWhatsApp = (phone, message) => {
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <span className="sombra">
                <section id="inicio" className="inicio">
                    <div className="contenido">
                        <Navbar />
                        <div className="fila">
                            <div className="col">
                                <h2>Desarrollador Fullstack</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam non quasi deserunt libero iste culpa distinctio iure deleniti ducimus labore sed.</p>
                                <button 
                                    className="btn btn-1" 
                                    onClick={() => openWhatsApp('62982552', 'Hola, estoy interesado en conocer más sobre sus servicios de desarrollo. ¿Podemos hablar?')}>
                                    CONTACTANOS
                                </button>
                            </div>
                            <div className="col">
                                <div className="contenedor-img">
                                    <img src={ImagenesApp.inicio} alt="Inicio" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </span>
            <Servicios/>
            <Habilidades/>
            <Trabajos/>
            <Contacto/>
        </>
    );
}

export default Inicio;
