import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  const { show, handleDismiss, handleClose } = props;
  return (
    <>
      <div className={show ? "popUp popUp__modal" : "popUp hide"}>
        <button onClick={handleClose} className="popUp__closeButton">
          X
        </button>
        <div className="popUp__container">
          <h2 className="popUp__heading">Instructions</h2>
          <p className="popUp__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            repellendus magni laborum magnam doloremque accusamus labore
            inventore sed fugit dolore? Corrupti ipsa officia quos ipsam dolore
            aliquam tempora eius asperiores?
          </p>
          <div className="popUp__button-container">
            <button
              onClick={handleDismiss}
              className="popUp__dontShowButton btn-primary"
            >
              Don't show again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
