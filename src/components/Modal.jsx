import React from "react";

const Modal = (props) => {
  const { show, closeModal } = props;
  return (
    <>
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>x</button>
        <h1>Instructions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          repellendus magni laborum magnam doloremque accusamus labore inventore
          sed fugit dolore? Corrupti ipsa officia quos ipsam dolore aliquam
          tempora eius asperiores?
        </p>
      </div>
    </>
  );
};
export default Modal;
