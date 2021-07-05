import React from "react";
import { useHistory } from "react-router-dom";
import "./FinishedPage.scss";
import logo from "../../assets/images/GrandBequestLogo.png";
import wave from "../../assets/images/wave.svg";
import wave3 from "../../assets/images/wave3.svg";
import wave4 from "../../assets/images/wave4.svg";
import secondWave from "../../assets/images/wave-2.svg";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";

const FinishedPage = (props) => {
  let history = useHistory();
  const resetStepper = () => {
    props.steps.setCurrentStep(1);
  };
  return (
    <div>
      <main>
        <section
          className="welcome"
          style={{ backgroundImage: `url(${wave4})` }}
        >
          <img className="welcome__logo" src={logo} alt="GrandBequestLogo" />
          <h1 className="welcome__title">Grand Bequest</h1>
          <p>Build your Legacy and Help Save an Old Building!</p>

          <button
            className="startButton"
            onClick={resetStepper}
            onClick={() => history.push("/home")}
          >
            Return Home!
          </button>
        </section>

        <section className="about">
          <h2 className="about__title">Thanks for uploading!</h2>
          <p>Your building has been saved to the map and is now viewable!</p>
          <img className="about__wave" src={wave3} />
        </section>

        <section className="contact">
          <h2 className="contact__title">Save more Buildings!</h2>
          <p>Share the App!</p>
          <div className="contact__social">
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
          <p className="contact__rights">
            Grand Bequest 2021 - All Rights Reserved
          </p>
        </section>
      </main>
    </div>
  );
};

export default FinishedPage;
