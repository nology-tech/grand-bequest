import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  const { show, closeModal } = props;
  return (
    <>
      <div className={show ? "popUp modal" : "popUp hide"}>
        <button className="popUp__closeButton" onClick={closeModal}>
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
