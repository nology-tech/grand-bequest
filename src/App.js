import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Modal from "../src/components/Modal/Modal";

function App() {
  const [show, setShow] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  useEffect(() => {
    openModal();
  }, []);
  // different options for button and useEffect

  const openModal = () => {
    if (!hasClicked) {
      setShow(true);
    }
  };
  const closeModal = () => {
    setShow(false);
    setHasClicked(true);
  };

  return (
    <div className="App">
      {!show && <button onClick={openModal}>Help</button>}
      <Modal closeModal={closeModal} show={show} />
    </div>
  );
}

export default App;
