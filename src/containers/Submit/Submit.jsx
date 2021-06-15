import React from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";


const Submit = () => {

  const history = useHistory();

  const cancelSubmit = () => {
    // Are you sure you want to cancel?

    history.push('home')
  }

  const sendToDB = () => {
    // Maybe add, do you want to add more information?
    // Yes sends to details form, no just submits
    console.log("Sent to DB!");
  }

  return (
    <div className="container">
      <p>Submit Page</p>
      <button onClick={cancelSubmit}>Cancel</button>
      <button onClick={sendToDB}>Submit</button>
    </div>
  );
};

export default Submit;
