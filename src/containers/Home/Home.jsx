import React, { useRef } from "react";
import "../../App.scss";

const Home = () => {
  return (
    <div className="container">
      <p>Home Test</p>
      <button>Upload existing</button>
      <button>Capture</button>
      <input type="file" accept="image/*" capture="environment" />
    </div>
  );
};

export default Home;
