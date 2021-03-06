import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { storage } from "../../firebase";
import Map from "../../components/Map/Map.jsx";
import Socials from "../../components/Socials/Socials";
import "./Confirmation.scss";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";

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
    history.push("submit");
  };

  // const quickSubmit = () => {
  //   // Are you sure you don't want to add more information?
  //   // with a 'Don't show me this again' tickbox
  //   const newData = { ...props.imgData };
  //   newData.image = "this-is-an-abandoned-building.jpg";
  //   props.setImgData(newData);

  //   // If all OK, sends to DB
  //   props.upload();
  //   console.log("Sent to DB!", props.imgData);
  // };

  const handleLiveCapture = (e) => {
    if (e.target.files[0]) {
      props.setImgFile(e.target.files[0]);
    }

    const newData = { ...props.imgData };
    props.setImgData(newData);

    props.setCurrentStep(2);

    history.push("confirmation");
  };

  return (
    <div className="confirmation__container">
      <ConfirmationModal
        imgFile={props.imgFile}
        handleLiveCapture={handleLiveCapture}
        confirmImage={confirmImage}
      />

      <Map
        imgData={props.imgData}
        imgFile={props.imgFile}
        currentLocation={props.currentLocation}
        setCurrentLocation={props.setCurrentLocation}
        manualLocation={props.manualLocation}
        setManualLocation={props.setManualLocation}
      />
      <div className="core-buttons">
        {/* image preview image logic */}
        {/* <img src={URL.createObjectURL(props.imgFile)} alt="abandoned building"/> */}
        <label for="live-capture" className="btn-secondary">
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
        <button
          className="btn-primary"
          onClick={() => {
            confirmImage();
            // handleUpload();
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
