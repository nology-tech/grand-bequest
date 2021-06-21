import React from "react";
import { useHistory } from "react-router-dom";

const Confirmation = (props) => {
  const history = useHistory();

  const getGeo = () => {
    let lat = null;
    let long = null;

    navigator.geolocation.getCurrentPosition((positions) => {
      lat = positions.coords.latitude;
      long = positions.coords.longitude;
    });

    return [lat, long];
  };

  const cancelSubmit = () => {
    // Are you sure you want to cancel?
    const newData = { ...props.imgData };
    for (let i in newData) {
      newData[i] = "";
    }
    console.log(newData);
    props.setImgData(newData);

    history.push("home");
  };

  const confirmImage = () => {
    const newData = { ...props.imgData };
    newData.image = "this-is-an-abandoned-building.jpg";
    props.setImgData(newData);

    history.push("submit");
  };

  const quickSubmit = () => {
    // Are you sure you don't want to add more information?
    // with a 'Don't show me this again' tickbox
    const newData = { ...props.imgData };
    newData.image = "this-is-an-abandoned-building.jpg";
    props.setImgData(newData);

    // If all OK, sends to DB
    props.upload();
    console.log("Sent to DB!", props.imgData);
  };

  const handleLiveCapture = () => {
    const newData = { ...props.imgData };
    newData.geolocation = getGeo();
    props.setImgData(newData);

    history.push("confirmation");
  };

  return (
    <div className="container">
      <p>Confirmation Page</p>
      <img src="https://openmaptiles.org/img/home-banner-map.png" alt="map" />

      <div>
        <p style={{ fontSize: "10px" }}>
          [MODAL PREVIEW WOULD GO HERE, ON TOP OF MAP, WITH RETAKE/CONFIRM
          BUTTONS]
        </p>
        <label
          for="live-capture"
          className="btn-tertiary"
        >
          Retake
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleLiveCapture}
          id="live-capture"
        />
        <button className="btn-tertiary" onClick={confirmImage}>
          Confirm
        </button>
      </div>

      <div className="core-buttons">
        <button className="btn-secondary" onClick={cancelSubmit}>
          Cancel
        </button>
        <button className="btn-primary" onClick={quickSubmit}>
          Quick Submit
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
