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

  const [ownership, setOwnership] = useState("");
  const [potentialUse, setPotentialUse] = useState("");
  const [localResident, setLocalResident] = useState("");
  const [yearBuiltPeriod, setYearBuiltPeriod] = useState("");
  const [lastOccupied, setLastOccupied] = useState("");
  const [contactPermission, setContactPermission] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const updateInformation = () => {
    const newData = { ...props.imgData };
    newData.ownership = ownership;
    newData.potential_use = potentialUse;
    newData.local_resident = localResident;
    newData.year_built_period = yearBuiltPeriod;
    newData.last_occupied = lastOccupied;
    newData.contact_permission = contactPermission;
    newData.email = email;
    newData.contact_number = contactNumber;
    props.setImgData(newData);

    const addInformation = () => {
      history.push("information");
    };
  };
  return (
    <div className="container">
      <div className="form">
        <div className="form__middle">
          <textarea
            className="form__input"
            type="text"
            placeholder="What do you think this building should be used for?"
            onBlur={(e) => setPotentialUse(e.target.value)}
          />
          <textarea
            className="form__input"
            type="text"
            placeholder="Who is the owner of this building?"
            onBlur={(e) => setOwnership(e.target.value)}
          />
          <textarea
            className="form__input"
            type="text"
            placeholder="Are you from the local area?"
            onBlur={(e) => setLocalResident(e.target.value)}
          />
          <textarea
            className="form__input"
            type="text"
            placeholder="When was this building built?"
            onBlur={(e) => setYearBuiltPeriod(e.target.value)}
          />
          <textarea
            className="form__input"
            type="text"
            placeholder="When was this building last used/occupied?"
            onBlur={(e) => setLastOccupied(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label htmlFor="canContact">
              Please tick if you are happy to be contacted?
            </label>
            <input
              className="form__permission"
              type="checkbox"
              name="canContact"
              id="canContact"
              style={{ width: 26, height: 26 }}
            />
          </div>
          <input
            className="form__input"
            type="text"
            placeholder="Please provide your email address:"
            onBlur={(e) => setEmail(e.target.value)}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Please provide your contact number:"
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
