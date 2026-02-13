import { FaGift } from "react-icons/fa6";
import dress from "../../assets/dreescode.png";
import grecaIZQ from "../../assets/greca2.png";
import grecaDER from "../../assets/greca3.png";
import "./Third.css";

function Third() {
  return (
    <section className="gif-container">
      <div className="dress-code">
        <div className="title-section">
          <img src={grecaIZQ} alt="adorno izquierdo" />
          <h2>Vestimenta</h2>
          <img src={grecaDER} alt="adorno derecho" />
        </div>

        <h4>Formal</h4>

        <img src={dress} />

        <p className="dress-description">
          Para esta ocasión, te pedimos elijas un atuendo sin estampados que
          resalten o llamen la atención.
        </p>
      </div>

      <div className="title-section">
        <img src={grecaIZQ} alt="adorno izquierdo" />
        {/* <h2>Mesa de Regalos</h2> */}
        <h2>Regalos</h2>
        <img src={grecaDER} alt="adorno derecho" />
      </div>

      <p className="gift-text">
        Lo más importante es compartir este día con ustedes; pero si desean
        contribuir a nuestro nuevo comienzo, te compartimos nuestra mesa de
        regalos.
      </p>
      <a
        href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51938987"
        target="_blanck"
      >
        <FaGift className="gift-icon" />
        Ir a la mesa de regalos
      </a>
      <p className="gift-text">
        O puedes hacer una contribución en nuestra cuenta de banco.
      </p>
      <div className="bank">BBVA: 151 307 70 86</div>
    </section>
  );
}

export default Third;
