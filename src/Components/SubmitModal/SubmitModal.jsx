import { React, useState } from "react";
import "./SubmitModal.scss";

const SubmitModal = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <div className={show ? "popup popup__modal" : "popup hide"}>
        <button onClick={handleClose} className="popup__closeButton">
          X
        </button>
        <div className="popup__container">
          <h2 className="popup__heading">Almost Done!</h2>
          <div className="popup__text">
            <p>1. Make sure your marker is in the right place</p>
            <p>
              2. If you have any more information, tap the "More information"
              button to add more details
            </p>
            <p>3. Tap the Submit button when you have finished!</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubmitModal;
