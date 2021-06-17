import React from "react";
import logo from "../../assets/images/GrandBequestLogo.png";
import { useHistory } from "react-router-dom";

const Landing = () => {
  let history = useHistory();

  return (
    <div className="container">
      <div className="landing-container">
        <img className="logo" src={logo} alt="GrandBequestLogo" />
        <h1 className="title">Grand Bequest</h1>
        <h3>Build your Legacy and Help Save an Old Building!</h3>
        <div className="core-buttons">
          <button
            className="core-buttons__right"
            onClick={() => history.push("/home")}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
