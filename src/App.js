import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
    <div className="App">
      {!show && <button onClick={openModal}>Show modal</button>}
      <Modal closeModal={closeModal} show={show} />
    </div>
  );
}

export default App;
