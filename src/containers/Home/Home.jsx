import React, { useState } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";
import Map from "../../Components/Map/Map";
import Overlay from "../../Components/Overlay/Overlay";

const Home = (props) => {
  const [hasMedia, setHasMedia] = useState(false);
  const history = useHistory();

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

  const handleLiveCapture = (e) => {
    if (e.target.files[0]) {
      props.setImgFile(e.target.files[0]);
    }
    setHasMedia(true);
    // handle geolocation here, and add to OBJECT
    const newData = { ...props.imgData };
    newData.geolocation = getGeo();
    props.setImgData(newData);

    history.push("confirmation");
  };

  const handleUpload = (e) => {
    // console.log("");
    // setHasMedia(true);

    if (e.target.files[0]) {
      props.setImgFile(e.target.files[0]);
    }
    history.push("details");
  };

  return (
    <div className="container">
      <Overlay></Overlay>

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
