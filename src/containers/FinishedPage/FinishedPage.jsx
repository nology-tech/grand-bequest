import React from "react";
import { useHistory } from "react-router-dom";
import "./FinishedPage.scss";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import pgram from "../../assets/images/pgram2.png";
const FinishedPage = (props) => {
  let history = useHistory();
  const resetStepper = () => {
    props.steps.setCurrentStep(1);
  };
  return (
    <div>
      <main>
        <section className="banner"></section>
        <section className="finished">
          <h2 className="finished__title">Thanks for uploading!</h2>
          <p>Your building has been saved to the map and is now viewable!</p>
          <img className="finished__wave" src={pgram} />
          <button
            className="finishButton"
            onClick={resetStepper}
            onClick={() => history.push("/home")}
          >
            Return Home!
          </button>
        </section>
        <section className="socials">
          <h2 className="socials__title">Save more Buildings!</h2>
          <p>Share the App!</p>
          <div className="socials__links">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.grandbequest.co.uk%2F&amp;src=sdkpreparse"
              target="_blank"
            >
              <img src={facebook} />
            </a>
            <a
              href="https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20old%20building,%20We%20must%20save%20it!&url=https://twitter.com/GrandBequest"
              target="_blank"
            >
              <img src={twitter} />
            </a>
          </div>
          <p className="socials__rights">
            Grand Bequest 2021 - All Rights Reserved
          </p>
        </section>
      </main>
    </div>
  );
};
export default FinishedPage;
