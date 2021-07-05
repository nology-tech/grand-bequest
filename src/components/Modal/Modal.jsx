import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  const { show, handleDismiss, handleClose } = props;
  return (
    <>
      <div className={show ? "popup popup__modal" : "popup hide"}>
        <button onClick={handleClose} className="popup__closeButton">
          X
        </button>
        <div className="popup__container">
          <h2 className="popup__heading">Instructions</h2>
          <div className="popup__text">
            <p>
              1a. Double-tap on the map to show where the abandoned building is,
              then take a picture! (A green marker will appear)
            </p>
            <p>
              1b. OR, if you're at home, upload a picture from your
              computer/phone gallery
            </p>
            <p>
              2. Tap the Submit button and send us the image directly, or let us
              know some information about it!
            </p>
            <p>
              3. Tap on other markers in your area and see what other people
              have found!
            </p>
            <p>4. Share your favourite images to social media!</p>
          </div>
          <button
            onClick={handleDismiss}
            className="popup__dismiss-btn btn-primary"
          >
            Don't show again
          </button>
        </div>
      </div>
    </>
  );
};
export default Modal;
