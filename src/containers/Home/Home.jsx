import React, { useState, useEffect } from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const [hasMedia, setHasMedia] = useState(true);

  useEffect(() => {
    if (hasMedia) {
      const history = useHistory();
      history.push("/confirmation");
      // minus length is the home length "home" i.e 4
      // console.log(window.location.href);
      // console.log(
      //   window.location.href.slice(0, window.location.href.length - 4)
      // );
    }
  }, [hasMedia]);

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
