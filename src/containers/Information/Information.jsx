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
  const [contactPermission, setContactPermission] = useState(false);
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState("");

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

    history.push("/submit");
  };
  const handleChecked = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <div className="form">
        <div className="form__middle">
          <h3>Optional fields</h3>
          <label
            for="potential usage of building"
            className="form__label-usage"
          >
            What do you think this building should be used for?
          </label>
          <textarea
            className="form__input"
            type="text"
            placeholder="What do you think this building should be used for?"
            onBlur={(e) => setPotentialUse(e.target.value)}
          />
          <label for="owner of the building" className="form__label-owner">
            Who is the owner of this building?
          </label>
          <textarea
            className="form__input"
            type="text"
            placeholder="Who is the owner of this building?"
            onBlur={(e) => setOwnership(e.target.value)}
          />
          {/* <textarea
            className="form__input"
            type="checkbox"
            placeholder="Are you from the local area?"
            onBlur={(e) => setLocalResident(e.target.value)}
          /> */}
          <label htmlFor="canContact">
            Please tick if you are from the local area
          </label>
          <input
            className="form__permission"
            type="checkbox"
            name="canContact"
            id="canContact"
            style={{
              height: 26,
              width: 25,
            }}
          />
          <label
            for="stories/memories of building"
            className="form__label-stories"
          >
            Do you have any stories or memories about this building?
          </label>
          <textarea
            className="form__input"
            type="text"
            placeholder="Do you have any stories or memories about this building?"
            onBlur={(e) => setYearBuiltPeriod(e.target.value)}
          />
          <label
            for="date that the building was last used"
            className="form__label-last-used"
          >
            When was this building last used/occupied?
          </label>
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
              value={contactPermission}
              onClick={() => setContactPermission(!contactPermission)}
              onClick={handleChecked}
              className="form__permission form__checkbox"
              type="checkbox"
              name="canContact"
              id="canContact"
              style={{
                height: 26,
                width: 25,
              }}
            />
          </div>

          <label
            for="email address"
            className="form__label-email"
            className={
              !show ? "form__label-email hide" : "form__label-email show"
            }
          >
            Please provide your email address:
          </label>
          <textarea
            className={!show ? "form__input hide" : "form__input show"}
            type="text"
            placeholder="Please provide your email address:"
            onBlur={(e) => setEmail(e.target.value)}
          />
          <label
            for="contact number"
            className="form__label-number"
            className={
              !show ? "form__label-number hide" : "form__label-number show"
            }
          >
            Please provide your contact number:
          </label>
          <textarea
            className={!show ? "form__input hide" : "form__input show"}
            type="text"
            placeholder="Please provide your contact number:"
            onBlur={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div className="core-buttons">
          <button
            className="btn-secondary"
            onClick={() => history.push("/details")}
          >
            Back
          </button>
          <button className="btn-primary" onClick={updateInformation}>
            Add Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
