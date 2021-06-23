import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import { useState } from "react";

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

  return (
    <Router className="App">
      {/* <NavBar /> */}
      <Routes imgData={imgData} setImgData={setImgData} />
    </Router>
  );
}

export default App;
