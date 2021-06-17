import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import { useState } from "react";
import "./App.css";

function App() {
  const [imgData, setImgData] = useState({
    image: "",
    geolocation: "",
    name_of_building: "",
    zip: "",
    country: "",
    comments: "",
    // ownership: "",
    // further_comments: "",
  });

  return (
    <Router className="App">
      <Routes imgData={imgData} setImgData={setImgData} />
    </Router>
  );
}

export default App;
