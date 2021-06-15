import React, { useState } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const [hasMedia, setHasMedia] = useState(false);

  const history = useHistory();

  // const handleOnClick = useCallback(() => history.push('confirmation'), [history]);

  const handleLiveCapture = () => {
    setHasMedia(true);
    history.push('confirmation');
  }

  const handleUpload= () => {
    setHasMedia(true);
    history.push('details');
  }



  return (
    <div className="container">
      <p>Home Test</p>
      {/* <button>Upload existing</button> */}
      {/* <button onClick={handleOnClick}>Capture</button> */}

      <input type="file" accept="image/*" onChange={handleUpload} />
      <input type="file" accept="image/*" capture="environment" onChange={handleLiveCapture} />
    </div>
  );
};

export default Home;
