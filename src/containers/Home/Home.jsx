import React, { useState } from "react";
import "../../App.scss";
import "../Home/Home.scss";
import { useHistory } from "react-router-dom";
import Map from "../../components/Map/Map.jsx";
import Overlay from "../../components/Overlay";
import Socials from "../../components/Socials/Socials";

const Home = (props) => {
  const history = useHistory();

  const handleLiveCapture = (e) => {
    if (e.target.files[0]) {
      props.setImgFile(e.target.files[0]);
    }

    const newData = { ...props.imgData };
    props.setImgData(newData);

    props.setCurrentStep(2);

    history.push("confirmation");
  };

  const handleUpload = (e) => {
    console.log(e.target.files);
    if (e.target.files[0]) {
      props.setImgFile(e.target.files[0]);
    }
    history.push("details");
    props.setCurrentStep(2);
  };

  return (
    <div>
      <Overlay></Overlay>
      <h2 className="home__title">Step 1/3: Home</h2>

      <Map
        imgData={props.imgData}
        imgFile={props.imgFile}
        currentLocation={props.currentLocation}
        setCurrentLocation={props.setCurrentLocation}
        manualLocation={props.manualLocation}
        setManualLocation={props.setManualLocation}
      />

      <div className="home__core-buttons core-buttons">
        <label for="file-upload" className="btn-secondary">
          Upload
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={handleUpload}
          id="file-upload"
        />

        <label
          for="live-capture"
          className={
            window.screen.width > 1050
              ? "btn-primary" // hidden
              : "btn-primary"
          }
        >
          Capture
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleLiveCapture}
          id="live-capture"
        />
      </div>
    </div>
  );
};

export default Home;
