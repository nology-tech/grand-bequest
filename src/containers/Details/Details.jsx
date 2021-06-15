import React from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";
import "./Details.scss";

const Details = () => {
  const history = useHistory();

  const updateInformation = () => {
    // Goes to submit page with updated info, ready to go to DB
    history.push("submit");
  };

  return (
    <div className="container details-form">
      <p>Details Form</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Abandoned_building_in_the_Ronet_classification_yard_%28DSCF5518%29.jpg/800px-Abandoned_building_in_the_Ronet_classification_yard_%28DSCF5518%29.jpg"
        alt="abandoned building"
        className="preview-image"
      />
      <input type="text" placeholder="Name of building" />
      <div>
        <input type="text" placeholder="Area Postcode/Zip" />
        <input type="text" placeholder="Country" />
      </div>
      <input type="text" placeholder="Comments" />

      <button className="button" onClick={history.goBack}>
        Back
      </button>
      <button className="button" onClick={updateInformation}>
        Update Info
      </button>
    </div>
  );
};

export default Details;
