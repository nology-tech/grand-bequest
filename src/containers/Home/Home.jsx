import React, { useState } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const [hasMedia, setHasMedia] = useState(false);

  const history = useHistory();

  // const handleOnClick = useCallback(() => history.push('confirmation'), [history]);

  const handleLiveCapture = () => {
    setHasMedia(true);
    // handle geolocation here, and add to OBJECT
    const newData = {...props.imgData};
    newData.geolocation = "x342.524 y2455.43";
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

      <label for="file-upload" className="custom-file-upload button">
        Upload Image
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        id="file-upload"
      />

      <label for="live-capture" className="custom-file-upload button">
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
  );
};

export default Home;
