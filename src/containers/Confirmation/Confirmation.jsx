import React from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";

const Confirmation = () => {

  const history = useHistory();

  const cancelSubmit = () => {
    // Are you sure you want to cancel?

    history.push('home')
  }

  const quickSubmit = () => {
    // Are you sure you don't want to add more information?
    // with a 'Don't show me this again' tickbox

    // If all OK, sends to DB
    console.log("Sent to DB!");

  }

  return (
    <div className="container">
      <p>Confirmation Test</p>
      <button onClick={cancelSubmit}>Cancel</button>
      <button onClick={quickSubmit}>Quick Submit</button>
    </div>
  );
};

export default Confirmation;
