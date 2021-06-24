import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { storage } from "../../firebase";
import Map from "../../components/Map/Map";
import { firestore } from "../../firebase";


const Submit = (props) => {
  const [url, setUrl] = useState("");
  const history = useHistory();

  console.log(props.imgData);

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
    // Maybe add, do you want to add more information?
    // Yes sends to details form, no just submits

    // direct upload without user ID
    firestore.collection("locations").add(props.imgData);

    // for specific user via some sort of ID
    // firestore.collection("locations").doc(USERID).collections("uploaded").add(imgData);

    console.log("Sent to DB!", props.imgData);
  };

  return (
    <div className="container">
      
      <Map
        currentLocation={props.currentLocation}
        setCurrentLocation={props.setCurrentLocation}
        manualLocation={props.manualLocation}
        setManualLocation={props.setManualLocation}
      />

      <p style={{ fontSize: "10px" }}>
        [Capture image preview would display with pin on map with this 'Add
        Information?' button]
      </p>
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
    </div>
  );
};

export default Submit;
