import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal.jsx";

const Overlay = () => {
  const hasDismissed = localStorage.getItem("hasDismissed");
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (!hasDismissed) setShow(true);
  }, []);

  const handleOpen = () => {
    setShow(true);
  };
  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem("hasDismissed", "true");
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="App">
      {!show && (
        <button className="helpButton" onClick={handleOpen}>
          ?
        </button>
      )}
      <Modal
        handleDismiss={handleDismiss}
        handleClose={handleClose}
        show={show}
      />
    </div>
  );
};

export default Overlay;
