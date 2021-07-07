import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import { useEffect, useState } from "react";
import "./App.scss";
import "./assets/styles/main.scss";
import { firestore } from "./firebase";
import {
  setCurrentLocation,
  setManualLocation,
  currentLocation,
  manualLocation,
} from "./locations";

function App() {
  const [imgFile, setImgFile] = useState(null);
  const [imgData, setImgData] = useState({
    image: "",
    geolocation: [],
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
    live: true,
    // further_comments: "",
  });

  return (
    <Router className="App">
      <Routes
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
