import React, { useState } from "react";
import "../../App.scss";
import "./Information.scss";
import { useHistory } from "react-router-dom";

// possible extra information to add:
// 1. do you know the owner of this building?
// 2. what do you think this building should be used for?
// 3. are you happy to be contacted regarding this building?
// 4. ^if yes please provide your email address

const Information = (props) => {
  let history = useHistory();

  const [ownerOfBuilding, setOwnerOfBuilding] = useState("");
  const [buildingUse, setBuildingUse] = useState("");
  const [contactPermission, setContactPermission] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const updateInformation = () => {
    const newData = { ...props.imgData };
    newData.owner_of_building = ownerOfBuilding;
    newData.building_use = buildingUse;
    newData.contact_permission = contactPermission;
    newData.email_address = emailAddress;
    newData.contact_number = contactNumber;
    props.setImgData(newData);

    const addInformation = () => {
      history.push("information");
    };

    const Checkbox = (props) => <input type="checkbox" {...props} />;

    // history.push("submit");
  };
  return (
    <div className="container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Abandoned_building_in_the_Ronet_classification_yard_%28DSCF5518%29.jpg/800px-Abandoned_building_in_the_Ronet_classification_yard_%28DSCF5518%29.jpg"
        alt="abandoned building"
        className="preview-image"
      />
      <div className="form">
        <div className="form__middle">
          <input
            className="form__input"
            type="text"
            placeholder="What do you think this building should be used for?"
            onBlur={(e) => setBuildingUse(e.target.value)}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Who is the owner of this building?"
            onBlur={(e) => setOwnerOfBuilding(e.target.value)}
          />
          <input
            className="form__input"
            placeholder="Are you happy to be contacted regarding this building?"
          />
          <input
            className="form__input"
            type="checkbox"
            onBlur={(e) => setContactPermission(e.target.value)}
          />
          <input
            className="form__input"
            type="checkbox"
            onBlur={(e) => setContactPermission(e.target.value)}
          />
          <input
            className="form__input"
            type="text"
            placeholder="If yes please provide your email address:"
            onBlur={(e) => setEmailAddress(e.target.value)}
          />
          <input
            className="form__input"
            type="text"
            placeholder="If yes please provide your contact number:"
            onBlur={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div className="core-buttons">
          <button className="core-buttons__left" onClick={history.goBack}>
            Back
          </button>
          <button className="core-buttons__right" onClick={updateInformation}>
            Update Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
