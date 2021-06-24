import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import { useState } from "react";
import "./App.scss";
import "./assets/styles/main.scss";
import Socials from "./components/Socials/Socials";
import { firestore } from "./firebase";

function App() {
  const [imgData, setImgData] = useState({
    image: "",
    geolocation: "",
    name_of_building: "",
    zip: "",
    country: "",
    comments: "",
    ownership: "",
    potential_use: "",
    last_occupied: "",
    local_resident: "",
    year_built_period: "",
    contact_permission: "",
    email: "",
    contact_number: "",
    live: 0,
    // further_comments: "",
  });

  let manualLocation = [];
  const setManualLocation = (newLocation) => {
    manualLocation = newLocation;
  };

  let currentLocation = [];
  const setCurrentLocation = (newLocation) => {
    currentLocation = newLocation;
  };

  return (
    <Router className="App">
      <Routes
        // upload={upload}
        // imgData={imgData}
        // setImgData={setImgData}
        setImgFile={setImgFile}
        imgFile={imgFile}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        manualLocation={manualLocation}
        setManualLocation={setManualLocation}
        imgData={imgData}
        setImgData={setImgData}
      />
    </Router>
  );
}

export default App;
