import React from "react";
import { useHistory } from "react-router-dom";

const Submit = (props) => {
  const history = useHistory();

  const cancelSubmit = () => {
    // Are you sure you want to cancel?
    const newData = {...props.imgData};
    for (let i in newData) {
      newData[i] = "";
    }
    console.log(newData);
    props.setImgData(newData);

    history.push("home");
  };

  const addInformation = () => {
    history.push('details')
  }

  const sendToDB = () => {
    // Maybe add, do you want to add more information?
    // Yes sends to details form, no just submits
    console.log("Sent to DB!", props.imgData);
  };

  return (
    <div className="container">
      <p>Submit Page</p>
      <img src="https://openmaptiles.org/img/home-banner-map.png" />
      <p style={{fontSize:"10px"}}>[Capture image preview would display with pin on map with this 'Add Information?' button]</p>
      <button className="button" onClick={addInformation}>Add Information?</button>


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
