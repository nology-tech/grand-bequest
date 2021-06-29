import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { storage } from "../../firebase";
import Map from "../../components/Map/Map";
import { firestore } from "../../firebase";
import "./Submit.scss";
import Socials from "../../components/Socials/Socials";

const Submit = (props) => {
  const [url, setUrl] = useState("");
  const history = useHistory();

  console.log(props.imgData);
  console.log("locations:", props.manualLocation, props.currentLocation);

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

  const addInformation = () => {
    history.push("details");
  };

  const sendToDB = () => {
    const uploadTask = storage
      .ref(`images/${props.imgFile.name}`)
      .put(props.imgFile);

    uploadTask.on(
      "state changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(props.imgFile.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setUrl(url);
          });
      }
    );
  };

  useEffect(() => {
    // THIS IS ALSO PART OF sendToDB()
    if (!url) {
      console.log(url);
      return;
    }
    console.log(url);

    // updates with geolocation, mobile location if it exists, otherwise manual
    // MUST CHANGE for desktop users
    const newData = { ...props.imgData };
    newData.geolocation = props.manualLocation
      ? props.manualLocation
      : props.currentLocation;
    // Add reference to the image within DB
    newData.image = url;

    // direct upload without user ID
    // send newsData, not props.imgData because we've just added the geolocation and url
    firestore.collection("locations").add(newData);
    // for specific user via some sort of ID
    // firestore.collection("locations").doc(USERID).collections("uploaded").add(imgData);

    window.confetti({
      zIndex: 1000,
      particleCount: 60,
      spread: 60,
      origin: {
        y: 0.8,
      },
    });

    console.log("Sent to DB!", newData);
  }, [url]);

  return (
    <div className="submit container">
      <h2 className="submit__title">Submit</h2>
      <p className="text-gray">
        Almost there! Click submit to send your capture..
      </p>
      <Map
        imgFile={props.imgFile}
        currentLocation={props.currentLocation}
        setCurrentLocation={props.setCurrentLocation}
        manualLocation={props.manualLocation}
        setManualLocation={props.setManualLocation}
      />

      {/* image preview image logic */}
      {/* <img src={URL.createObjectURL(props.imgFile)} alt="abandoned building"/> */}
      <button className="button" onClick={addInformation}>
        Add Information?
      </button>

      <div className="core-buttons">
        <button className="btn-secondary" onClick={cancelSubmit}>
          Cancel
        </button>
        <button className="btn-primary" onClick={sendToDB}>
          Submit
        </button>
      </div>
      <Socials />
    </div>
  );
};

export default Submit;
