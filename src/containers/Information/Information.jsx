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
              value={contactPermission}
              onClick={() => setContactPermission(!contactPermission)}
              onClick={handleChecked}
              className="form__permission"
              type="checkbox"
              name="canContact"
              id="canContact"
              style={{
                height: 26,
                width: 25,
              }}
            />
          </div>
          <textarea
            className={
              !show ? "form__input hide email" : "form__input show email"
            }
            type="text"
            placeholder="Please provide your email address:"
            onBlur={(e) => setEmail(e.target.value)}
          />
          <textarea
            className={
              !show ? "form__input hide number" : "form__input show number"
            }
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
          <button className="btn-primary" onClick={validateInputs}>
            Add Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default Information;
