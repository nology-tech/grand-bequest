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
    newData.ownership = ownership ? ownership : props.imgData.ownership;
    newData.potential_use = potentialUse
      ? potentialUse
      : props.imgData.potential_use;
    newData.local_resident = localResident
      ? localResident
      : props.imgData.local_resident;
    newData.year_built_period = yearBuiltPeriod
      ? yearBuiltPeriod
      : props.imgData.year_built_period;
    newData.last_occupied = lastOccupied
      ? lastOccupied
      : props.imgData.last_occupied;
    newData.contact_permission = contactPermission
      ? contactPermission
      : !props.imgData.contact_permission;
    newData.email = email ? email : props.imgData.email;
    newData.contact_number = contactNumber
      ? contactNumber
      : props.imgData.contact_number;
    props.setImgData(newData);
    history.push("/submit");
  };

  // history.push("/submit"); <---- does this need to go in?
  const validateInputs = () => {
    const emailValue = document.getElementsByClassName("email")[0];
    const numberValue = document.getElementsByClassName("number")[0];

    if (show === true) {
      if (validateEmail(emailValue.value)) {
        emailValue.style.border = "none";
        if (validateNumber(numberValue.value)) {
          numberValue.style.border = "none";
          updateInformation();
        } else {
          numberValue.style.border = "solid red";
          alert("Please enter a valid phone number");
        }
      } else {
        emailValue.style.border = "solid red";
        alert("Please enter a valid email address");
      }
    } else {
      updateInformation();
    }
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateNumber = (number) => {
    const re = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/;
    return re.test(number);
  };

  const handleChecked = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <div className="form">
        <div className="form__middle">
          <h3>Optional fields</h3>
          <label htmlFor="potential usage of building" className="form__label">
            What do you think this building should be used for?
          </label>
          <textarea
            className="form__input"
            type="text"
            onBlur={(e) => setPotentialUse(e.target.value)}
            defaultValue={
              props.imgData.potential_use ? props.imgData.potential_use : ""
            }
          />
          <label htmlFor="owner of the building" className="form__label">
            Who is the owner of this building?
          </label>
          <textarea
            className="form__input"
            type="text"
            onBlur={(e) => setOwnership(e.target.value)}
            defaultValue={
              props.imgData.ownership ? props.imgData.ownership : ""
            }
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label htmlFor="canContact" className="form__label">
              Please tick if you are from the local area
            </label>
            <input
              className="form__permission"
              type="checkbox"
              name="canContact"
              id="canContact"
              style={{
                height: 21,
                width: 25,
              }}
            />
          </div>
          <label htmlFor="stories/memories of building" className="form__label">
            Do you have any stories or memories about this building?
          </label>
          <textarea
            className="form__input"
            type="text"
            onBlur={(e) => setYearBuiltPeriod(e.target.value)}
            defaultValue={
              props.imgData.year_built_period
                ? props.imgData.year_built_period
                : ""
            }
          />
          <label
            htmlFor="date that the building was last used"
            className="form__label"
          >
            When was this building last used/occupied?
          </label>
          <textarea
            className="form__input"
            type="text"
            onBlur={(e) => setLastOccupied(e.target.value)}
            defaultValue={
              props.imgData.last_occupied ? props.imgData.last_occupied : ""
            }
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label htmlFor="canContact" className="form__label">
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
            htmlFor="email address"
            className="form__label-email"
            className={
              !show ? "form__label-email hide" : "form__label-email show"
            }
          >
            Please provide your email address:
          </label>
          <textarea
            // className={!show ? "form__input hide" : "form__input show"}
            className={
              !show ? "form__input hide email" : "form__input show email"
            }
            type="text"
            onBlur={(e) => setEmail(e.target.value)}
            defaultValue={props.imgData.email ? props.imgData.email : ""}
          />
          <label
            htmlFor="contact number"
            className="form__label-number"
            className={
              !show ? "form__label-number hide" : "form__label-number show"
            }
          >
            Please provide your contact number:
          </label>
          <textarea
            // className={!show ? "form__input hide" : "form__input show"}
            className={
              !show ? "form__input hide number" : "form__input show number"
            }
            type="text"
            onBlur={(e) => setContactNumber(e.target.value)}
            defaultValue={
              props.imgData.contact_number ? props.imgData.contact_number : ""
            }
          />
        </div>
        <div className="core-buttons">
          <button
            className="btn-secondary"
            onClick={() => history.push("/details")}
          >
            Back
          </button>
          <button className="btn-primary" onClick={validateInputs}>
            Add Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default Information;
