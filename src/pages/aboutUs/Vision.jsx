//assets
import primaryImage from "./../../assets/img/visionImage1.png";
import secondaryImage from "./../../assets/img/visionImage2.png";
import terniaryImage from "./../../assets/img/visionImage3.png";

//css
import "./vision.css";

const Vision = () => {
  return (
    <div className="container-vision">
      <div className="image-vision">
        <div className="principal-img">
          <img src={primaryImage} alt="" />
        </div>

        <div className="secundary-img">
          <img src={secondaryImage} alt="" />
        </div>

        <div className="terniary-img">
          <img src={terniaryImage} alt="" />
        </div>
      </div>

      <div className="text-vision">
        <h1>¿Cual es nuestra visión?</h1>
        <p>
          Convertirnos en una empresa que sea reconocido por la transformación
          digital de empresas, ofreciendo soluciones innovadoras y
          personalizadas que mejoren la eficiencia y productividad a través del
          uso de tecnologías avanzadas como Inteligencia Artificial,
          automatización y desarrollo de software.
        </p>
      </div>
    </div>
  );
};

export default Vision;
