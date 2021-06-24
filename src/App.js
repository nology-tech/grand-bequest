import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import { useState } from "react";
import "./App.scss";
import "./assets/styles/main.scss";
import Socials from "./components/Socials/Socials";
// import {firestore} from "./firebase"

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

  const upload = () => {
    // direct upload without user ID
    // firestore.collection("locations").add(imgData);
    // for specific user via some sort of ID
    // firestore.collection("locations").doc(USERID).collections("uploaded").add(imgData);
    console.log("Finishing upload...");
  };

  return (
    <Router className="App">
      <Routes upload={upload} imgData={imgData} setImgData={setImgData} />
      {/* <Socials /> */}
    </Router>
  );
}

export default App;
