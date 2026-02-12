// import photo from "../../assets/foto2.png";
// import church from "../../assets/templo.webp";
// import salon from "../../assets/arcadia.webp";
import Countdown from "../Countdown/Countdown";
import { FaMapLocationDot } from "react-icons/fa6";

function Second() {
  return (
    <section className="date-container">
      <>
        <div className="final-countdown">
          <h5>¡ Nos Casamos!</h5>
          <Countdown />
          <p className="cita-countdown">
            Hoy el amor nos encontró, y decidimos no soltarnos jamás.
          </p>
        </div>

        {/* <img src={photo} alt="foto acostados" /> */}

        <div className="data-church">
          <h2>Misa</h2>
          <p className="title-names">Templo de los Dominicos</p>
          <p className="direction">Calle Domingo Velázquez, El Paraiso</p>
          <p className="time">1:00 pm</p>
          {/* <img className="church" src={church} alt="templo" /> */}
          <a
            href="https://www.google.com/maps/place/Templo+De+Los+Dominicos+Fraccionamiento+El+Paraiso/@21.0315868,-101.8542976,17z/data=!3m1!4b1!4m6!3m5!1s0x842be85155555555:0xf3eb181c8c6b7a3e!8m2!3d21.0315818!4d-101.8517227!16s%2Fg%2F11cmhwfygw?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blanck"
          >
            <FaMapLocationDot className="map-icon" />
            Ver Ubicación
          </a>
        </div>
      </>

      <>
        <div className="data-church">
          <h2>Recepción</h2>
          <p className="title-names">Jardin de eventos La Quinta Soledad</p>
          <p className="direction">El Maguey</p>
          <p className="time">3:00 pm</p>
          {/* <img className="church" src={salon} alt="templo" /> */}
          <a
            href="https://www.google.com/maps/place/La+Quinta+Soledad/@20.9798109,-101.8360255,15z/data=!4m6!3m5!1s0x842be9b7a7ac01e1:0xe9b3eb524c0e7808!8m2!3d20.9794921!4d-101.8360989!16s%2Fg%2F11t8q4w0pt?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blanck"
          >
            <FaMapLocationDot className="map-icon" />
            Ver Ubicación
          </a>
        </div>
      </>

      <>
        <div className="data-church">
          <h2>Nos Acompañan</h2>
          <p>Nuestros padres</p>
          <div className="parients">
            <>
              <h3>Susana Ramos Pinedo</h3>
              <h3>Aarón Torres Reynoso</h3>
            </>
            <>
              <h3>Silvia Balandrán Ledezma</h3>
              <h3>Francisco Balderas Veloz</h3>
            </>
          </div>
          <p>Padrinos de Velación</p>
          <div className="parients">
            <>
              <h3>Martha Laura Hermosillo Javier</h3>
              <h3>Roberto Hernández Delgadillo</h3>
            </>
          </div>
        </div>
      </>
    </section>
  );
}

export default Second;
