import React from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";


const Details = () => {

  const history = useHistory();

  const updateInformation = () => {
    // Goes to submit page with updated info, ready to go to DB
    history.push('submit')
  }

  return (
    <div className="container">
      <p>Details Form</p>
      <input type="text" />
      <input type="text" />
      <button onClick={history.goBack}>Back</button>
      <button onClick={updateInformation}>Update Info</button>
    </div>
  );
};

export default Details;
