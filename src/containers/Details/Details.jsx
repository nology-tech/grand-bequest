import React, { useState } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";
import "./Details.scss";
import Socials from "../../components/Socials/Socials.jsx";

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
    newData.name_of_building = nameOfBuilding
      ? nameOfBuilding
      : props.imgData.name_of_building;
    newData.zip = zip ? zip : props.imgData.zip;
    newData.country = country ? country : props.imgData.country;
    newData.comments = comments ? comments : props.imgData.comments;
    props.setImgData(newData);

    history.push("submit");
    props.setCurrentStep(3);
  };

  const addMoreInformation = () => {
    // ADDS current details AND goes to next page
    updateInformation();
    history.push("/information");
  };

  return (
    <div className="details container">
      <img
        src={URL.createObjectURL(props.imgFile)}
        alt="abandoned building"
        className="preview-image"
      />

      <div className="form">
        <label>Name of Building / Former Purpose</label>
        <input
          className="form__input"
          type="text"
          onBlur={(e) => setNameOfBuilding(e.target.value)}
          defaultValue={
            props.imgData.name_of_building ? props.imgData.name_of_building : ""
          }
        />

        <label>Area Postcode/Zip</label>
        <input
          className="form__input"
          type="text"
          onBlur={(e) => setZip(e.target.value)}
          defaultValue={props.imgData.zip ? props.imgData.zip : ""}
        />

        <label>Country</label>
        <input
          className="form__input"
          type="text"
          onBlur={(e) => setCountry(e.target.value)}
          defaultValue={props.imgData.country ? props.imgData.country : ""}
        />

        <label>Comments</label>
        <textarea
          className="form__input input__box"
          type="text"
          onBlur={(e) => setComments(e.target.value)}
          defaultValue={props.imgData.comments ? props.imgData.comments : ""}
        />

        <div className="core-buttons">
          <button
            className="btn-secondary"
            onClick={() => history.push("/submit")}
          >
            Back
          </button>
          <button className="btn-primary" onClick={updateInformation}>
            Update
          </button>
        </div>
      </div>
      <button className="button" onClick={addMoreInformation}>
        Have more information?
      </button>
    </div>
  );
};

export default Details;
