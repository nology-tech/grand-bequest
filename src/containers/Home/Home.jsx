import React, { useState, useEffect, useCallback } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const [hasMedia, setHasMedia] = useState(false);

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('confirmation'), [history]);

  useEffect(() => {
    if (hasMedia) {
      handleOnClick();
    }
  }, [hasMedia]);

  return (
    <div className="container">
      <p>Home Test</p>
      <button>Upload existing</button>
      <button onClick={handleOnClick}>Capture</button>
      <input type="file" accept="image/*" capture="environment" />
      <input type="file" accept="image/*" />
    </div>
  );
};

export default Home;
