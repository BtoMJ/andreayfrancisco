import home from "../../assets/Home.png";
import greca from "../../assets/greca.png";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-photo">
        <img src={home} alt="foto de los novios" />
      </div>
      <div className="names-container">
        <p className="names">
          Andrea <span>&</span> Francisco
        </p>
        <p className="date-names">02 Mayo 2026</p>
        <img src={greca} alt="adorno de la portada" />
      </div>
    </div>
  );
}

export default Home;
