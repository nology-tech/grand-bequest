import React, { useState } from "react";
import "../../App.scss";
import "../Home/Home.scss";
import { useHistory } from "react-router-dom";
import Map from "../../Components/Map/Map.jsx";
import Overlay from "../../Components/Overlay";
import Socials from "../../Components/Socials/Socials";

const Home = (props) => {
  const [hasMedia, setHasMedia] = useState(false);
  const history = useHistory();

  const platform = navigator.platform;

  const handleLiveCapture = (e) => {
    if (e.target.files[0]) {
      props.setImgFile(e.target.files[0]);
    }
    setHasMedia(true);
    const newData = { ...props.imgData };
    props.setImgData(newData);

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

      <Map
        imgData={props.imgData}
        imgFile={props.imgFile}
        currentLocation={props.currentLocation}
        setCurrentLocation={props.setCurrentLocation}
        manualLocation={props.manualLocation}
        setManualLocation={props.setManualLocation}
      />

      <div className="core-buttons">
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
            platform.includes("Win") ||
            platform.includes("Mac") ||
            platform.includes("Linux")
              ? "btn-primary hidden"
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
      <Socials />
      {/* <button class="add-button">Add to home screen</button> */}
    </div>
  );
};

export default Home;
