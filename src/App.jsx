import "./App.css";
import WeatherApp from "./Component/WeatherApp";
import Navbar from "./Component/Navbar";
import Console from "./Component/Console";

function App() {
  return (
    <div className="font-nunito" 
    >
        <Navbar />
        <WeatherApp />
        <Console />
      </div>
  );
}

export default App;