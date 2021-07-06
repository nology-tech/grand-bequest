import React, { useState } from "react";
import "./ConfirmationModal.scss";

const ConfirmationModal = (props) => {
  const [show, setShow] = useState(true);

  console.log(props.imgFile);

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem("hasDismissed", "true");
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div
        className={
          show
            ? "confirmation-popup confirmation-popup__modal"
            : "confirmation-popup hide"
        }
      >
        <button
          onClick={handleClose}
          className="confirmation-popup__closeButton"
        >
          X
        </button>
        <div className="confirmation-popup__container">
          <img
            src={URL.createObjectURL(props.imgFile)}
            alt="Abandoned Building"
          />

        </div>
      </div>
    </>
  );
};
export default ConfirmationModal;
