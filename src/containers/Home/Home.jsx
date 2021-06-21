import React, { useState } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";
import Map from "../../components/Map/Map.jsx";
import Overlay from "../../components/Overlay";

const Home = (props) => {
  const [hasMedia, setHasMedia] = useState(false);

  const platform = navigator.platform;

  // const getGeo = () => {
  //   let lat = null;
  //   let long = null;

  //   navigator.geolocation.getCurrentPosition((positions) => {
  //     lat = positions.coords.latitude;
  //     long = positions.coords.longitude;
  //   });

  //   return [lat, long];
  // };

  const history = useHistory();

  const handleLiveCapture = () => {
    setHasMedia(true);
    // handle geolocation here, and add to OBJECT
    const newData = { ...props.imgData };
    newData.geolocation = props.manualLocation;
    props.setImgData(newData);

    history.push("confirmation");
  };

  const handleUpload = () => {
    setHasMedia(true);
    history.push("details");
  };

  return (
    <div className="container">
      <Overlay></Overlay>

      <p>Home</p>
      <Map
        currentLocation={props.currentLocation}
        setCurrentLocation={props.setCurrentLocation}
        manualLocation={props.manualLocation}
        setManualLocation={props.setManualLocation}
      />

      <div className="core-buttons">
        <label for="file-upload" className="btn-secondary">
          Upload Image
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
    </div>
  );
};

export default Home;
