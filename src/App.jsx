import "./App.css";
import WeatherApp from "./Component/WeatherApp";
import Navbar from "./Component/Navbar";
import Console from "./Component/Console";
// import Bgr from "/Background.png";

function App() {
  return (
    <div className="font-nunito" 
    // style={{ backgroundImage: `url(${Bgr})` }}
    >
        <Navbar />
        <WeatherApp />
        <Console />
      </div>
  );
}

export default App;