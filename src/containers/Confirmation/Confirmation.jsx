import React from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";

const Confirmation = () => {
  const history = useHistory();

  const cancelSubmit = () => {
    // Are you sure you want to cancel?

    history.push("home");
  };

  const quickSubmit = () => {
    // Are you sure you don't want to add more information?
    // with a 'Don't show me this again' tickbox

    // If all OK, sends to DB
    console.log("Sent to DB!");
  };

  const handleLiveCapture = () => {
    history.push("confirmation");
  };

  return (
    <div className="container">
      <p>Confirmation Page</p>
      <img src="https://openmaptiles.org/img/home-banner-map.png" alt="map" />

      <div>
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
        <button className="button">Confirm</button>
      </div>

      <button className="button" onClick={cancelSubmit}>
        Cancel
      </button>
      <button className="button" onClick={quickSubmit}>
        Quick Submit
      </button>
    </div>
  );
};

export default Confirmation;
