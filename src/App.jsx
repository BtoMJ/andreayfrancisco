import "./App.css";
import Home from "./components/Home/Home";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";
import Music from "./components/Music/Music";

function App() {
  return (
    <div className="container">
      <div className="info">
        <Music />
        <Home />
        <Second />
        <Third />
      </div>
    </div>
  );
}

export default App;
