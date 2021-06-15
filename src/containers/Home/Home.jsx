import React, { useState } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const [hasMedia, setHasMedia] = useState(false);

  const history = useHistory();

  // const handleOnClick = useCallback(() => history.push('confirmation'), [history]);

  const handleLiveCapture = () => {
    setHasMedia(true);
    history.push("confirmation");
  };

  const handleUpload = () => {
    setHasMedia(true);
    history.push("details");
  };

  return (
    <div className="container">
      <p>Home Test</p>
      {/* <button>Upload existing</button> */}
      {/* <button onClick={handleOnClick}>Capture</button> */}

      <label for="file-upload" className="custom-file-upload button">
        Upload Image
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        id="file-upload"
      />

      <label for="live-capture" className="custom-file-upload button">
        Capture
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleLiveCapture}
        id="live-capture"
      />
    </div>
  );
};

export default Home;
