import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  const { show, handleDismiss, handleClose } = props;
  return (
    <>
      <div className={show ? "popUp modal" : "popUp hide"}>
        <button onClick={handleClose} className="popUp__closeButton">
          X
        </button>
        <h1 className="popUp__heading">Instructions</h1>
        <p className="popUp__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          repellendus magni laborum magnam doloremque accusamus labore inventore
          sed fugit dolore? Corrupti ipsa officia quos ipsam dolore aliquam
          tempora eius asperiores?
        </p>
        <button
          onClick={handleDismiss}
          className={
            show ? "modal popUp__dontShowButton" : "hide popUp__dontShowButton"
          }
        >
          Don't show again
        </button>
      </div>
    </>
  );
};
export default Modal;
