// JS/React
import React from "react";
import { useHistory } from "react-router-dom";

// Images
import logo from "../../assets/images/GrandBequestLogo.png";
import wave from "../../assets/images/wave.svg";
import wave3 from "../../assets/images/wave3.svg";
import wave4 from "../../assets/images/wave4.svg";
import secondWave from "../../assets/images/wave-2.svg";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";

// Styles
import "./Landing.scss";

const Landing = () => {
  let history = useHistory();

  return (
    <main>
      {/* NOTE: Background-url set with inline style so wave/svg can be imported  */}
      <section className="welcome" style={{ backgroundImage: `url(${wave4})` }}>
        <img className="welcome__logo" src={logo} alt="GrandBequestLogo" />
        <h1 className="welcome__title">Grand Bequest</h1>
        <p>Build your Legacy and Help Save an Old Building!</p>
        <div className="welcome__core-buttons">
          <button className="btn-primary" onClick={() => history.push("/home")}>
            START
          </button>
        </div>
      </section>

      <section className="about">
        <h2 className="about__title">ABOUT</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          doloremque ipsam ut cum cupiditate amet, temporibus perferendis
          corporis aut, aperiam quo. Nihil, aliquam sed vel recusandae eum qui
          voluptate molestias. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam doloremque ipsam ut cum cupiditate amet,
          temporibus perferendis corporis aut, aperiam quo. Nihil, aliquam sed
          vel recusandae eum qui voluptate molestias
        </p>
        <img className="about__wave" src={wave4} />
      </section>

      <section className="contact">
        <h2 className="contact__title">CONTACT</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          doloremque ipsam ut cum cupiditate amet, temporibus perferendis
          corporis aut, aperiam quo. Nihil, aliquam sed vel recusandae eum qui
          voluptate molestias. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam doloremque ipsam ut cum cupiditate amet,
          temporibus perferendis corporis aut, aperiam quo. Nihil, aliquam sed
          vel recusandae eum qui voluptate molestias
        </p>
        <div className="contact__social">
          <a href="https://www.facebook.com/GrandBequest" target="_blank">
            <img src={facebook} />
          </a>
          <a href="https://twitter.com/GrandBequest" target="_blank">
            <img src={twitter} />
          </a>
        </div>
        <p className="contact__rights">
          Grand Bequest 2021 - All Rights Reserved
        </p>
      </section>
    </main>
  );
};

export default Landing;
