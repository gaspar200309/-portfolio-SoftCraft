// src/components/Inicio/Inicio.js
import Navbar from "../../components/navar/Navbar";
import Servicios from "../services/Services";
import Habilidades from "../skills/Skills";
import Trabajos from "../jobs/Jobs";
import Contacto from "../contact/Contact";
import Vision from "../aboutUs/Vision";
import Mision from "../aboutUs/Mision";

//assets
import ImagenesApp from "../../assets/ImagenesApp";
import About from "../about/About";
import Demo from "../../components/chat/Chat2";
import  Chat  from "../../components/chat/Chat";
//css
import "./Inicio.css";

function Inicio() {
  const openWhatsApp = (phone, message) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <span className="sombra">
        <section
          id="inicio"
          className="inicio">
          <div className="contenido">
            <Navbar />
            <div className="fila">
              <div className="col">
                <h2>Soluciones web personalizadas.</h2>
                <p>
                  Creamos soluciones tecnológicas personalizadas, con un enfoque
                  especializado en Inteligencia Artificial (IA)
                </p>
                <button
                  className="btn btn-1"
                  onClick={() =>
                    openWhatsApp(
                      "62982552",
                      "Hola, estoy interesado en conocer más sobre sus servicios de desarrollo. ¿Podemos hablar?"
                    )
                  }>
                  CONTACTANOS
                </button>
              </div>
              <div className="col">
                <div className="contenedor-img">
                  <img
                    src={ImagenesApp.inicio}
                    alt="Inicio"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="contend-a">
          <div className="content-about">
            <h1 className="about-title">Quiénes Somos</h1>
            <p className="about-description">
              Somos una empresa dedicada al desarrollo de software, especializada
              en la creación de aplicaciones móviles y web, integrando
              inteligencia artificial para ofrecer soluciones innovadoras y de
              alta calidad a nuestros clientes.
            </p>
          </div>
        </div>
      </span>
      <Vision />
      <Mision />
      <Servicios />
      <Trabajos />
      <Chat/>
      <Contacto />
    </>
  );
}

export default Inicio;
