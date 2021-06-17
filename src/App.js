import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Modal from "../src/components/Modal/Modal";

function App() {
  const [show, setShow] = useState(false);

  const hasDismissed = localStorage.getItem("hasDismissed");

  useEffect(() => {
    openModal();
  }, []);
  // different options for button and useEffect

  const openModal = () => {
    if (!hasDismissed) {
      setShow(true);
    }
  };
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
}

export default App;
