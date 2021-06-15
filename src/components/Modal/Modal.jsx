import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  const { show, closeModal } = props;
  return (
    <>
      <div className={show ? "modal" : "hide"}>
        <button className="closeButton" onClick={closeModal}>
          X
        </button>
        <h1>Instructions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          repellendus magni laborum magnam doloremque accusamus labore inventore
          sed fugit dolore? Corrupti ipsa officia quos ipsam dolore aliquam
          tempora eius asperiores?
        </p>
        <button
          className={show ? "modal dontShowButton" : "hide dontShowButton"}
        >
          Don't show again
        </button>
      </div>
    </>
  );
};
export default Modal;
