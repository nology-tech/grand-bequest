import React, { useState } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";
import "./Details.scss";
import Information from "../Information/Information";
import { storage } from "../../firebase";

const Details = (props) => {
  let history = useHistory();

  const [nameOfBuilding, setNameOfBuilding] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [comments, setComments] = useState("");

  const updateInformation = () => {
    // Goes to submit page with updated info, ready to go to DB

    // Update image data
    const newData = { ...props.imgData };
    newData.name_of_building = nameOfBuilding;
    newData.zip = zip;
    newData.country = country;
    newData.comments = comments;
    props.setImgData(newData);

    history.push("submit");
  };

  const addMoreInformation = () => {
    // ADDS current details AND goes to next page
    updateInformation();
    history.push("/information")
  }


  return (
    <div className="container">
      <img
        src={URL.createObjectURL(props.imgFile)}
        alt="abandoned building"
        className="preview-image"
      />

      <div className="form">
        <input
          className="form__input--name"
          type="text"
          placeholder="Name of Building / Former Purpose"
          onBlur={(e) => setNameOfBuilding(e.target.value)}
        />

        <div className="form__middle">
          <input
            className="form__middle__input"
            type="text"
            placeholder="Area Postcode/Zip"
            onBlur={(e) => setZip(e.target.value)}
          />
          <input
            className="form__middle__input"
            type="text"
            placeholder="Country"
            onBlur={(e) => setCountry(e.target.value)}
          />
        </div>

        <textarea
          className="form__input--comments"
          type="text"
          placeholder="Comments"
          onBlur={(e) => setComments(e.target.value)}
        />
      </div>

     
      <button className="button" onClick={addMoreInformation}>Have more information?</button>
  

      <div className="core-buttons">
        <button className="btn-secondary" onClick={() => history.push("/submit")}>
          Back
        </button>
        <button className="btn-primary" onClick={updateInformation}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Details;
