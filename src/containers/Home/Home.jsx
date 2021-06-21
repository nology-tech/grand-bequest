import React, { useState } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";
import Map from "../../Components/Map/Map.jsx";
import Overlay from "../../Components/Overlay";

const Home = (props) => {
  const [hasMedia, setHasMedia] = useState(false);

  const platform = navigator.platform;

  const getGeo = () => {
    let lat = null;
    let long = null;

    navigator.geolocation.getCurrentPosition((positions) => {
      lat = positions.coords.latitude;
      long = positions.coords.longitude;
    });

    return [lat, long];
  };

  const history = useHistory();

  const handleLiveCapture = () => {
    setHasMedia(true);
    // handle geolocation here, and add to OBJECT
    const newData = { ...props.imgData };
    newData.geolocation = getGeo();
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
      <Map></Map>

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
