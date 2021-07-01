import React, { useState } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";
import "./Details.scss";
import Information from "../Information/Information";
import { storage } from "../../firebase";
import Socials from "../../components/Socials/Socials";

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
  };

  const addMoreInformation = () => {
    // ADDS current details AND goes to next page
    updateInformation();
    history.push("/information");
  };

  return (
    <div className="details container">
      <h2 className="details__title">Details</h2>
      <p className="text-default">
        Provide a few details about your capture...
      </p>

      <img
        src={URL.createObjectURL(props.imgFile)}
        alt="abandoned building"
        className="preview-image"
      />

      <div className="form">
        <input
          className="form__input"
          type="text"
          placeholder="Name of Building / Former Purpose"
          onBlur={(e) => setNameOfBuilding(e.target.value)}
          defaultValue={
            props.imgData.name_of_building ? props.imgData.name_of_building : ""
          }
        />

        <input
          className="form__input"
          type="text"
          placeholder="Area Postcode/Zip"
          onBlur={(e) => setZip(e.target.value)}
          defaultValue={props.imgData.zip ? props.imgData.zip : ""}
        />
        <input
          className="form__input"
          type="text"
          placeholder="Country"
          onBlur={(e) => setCountry(e.target.value)}
          defaultValue={props.imgData.country ? props.imgData.country : ""}
        />

        <textarea
          className="form__input"
          type="text"
          placeholder="Comments"
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
      <Socials />
    </div>
  );
};

export default Details;
