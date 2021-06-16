import React, { useState } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";
import "./Home.scss";

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

  // const handleOnClick = useCallback(() => history.push('confirmation'), [history]);

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
      <p>Home Test</p>
      <img src="https://openmaptiles.org/img/home-banner-map.png" alt="map" />

      <div className="core-buttons">
        <label
          for="file-upload"
          className="custom-file-upload core-buttons__left"
        >
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
              ? "custom-file-upload core-buttons__right hidden"
              : "custom-file-upload core-buttons__right"
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
