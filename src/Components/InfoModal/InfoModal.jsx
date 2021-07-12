import React, { useState } from "react";
import "./InfoModal.scss";
import Socials from "../Socials/Socials";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faTwitterSquare,
  fab,
  far,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoModal = (props) => {
  const { show, handleClose } = props;

  return (
    <div className={show ? "info-modal info-modal__modal" : "info-modal hide"}>
      <button onClick={handleClose} className="popup__closeButton">
        X
      </button>
      <div className="info-modal__socials-container">
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.grandbequest.co.uk%2F&amp;src=sdkpreparse">
          <FontAwesomeIcon
            icon={["fab", "facebook-square"]}
            className="info-modal__facebook"
          />
        </a>
        <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20old%20building,%20We%20must%20save%20it!&url=https://twitter.com/GrandBequest">
          <FontAwesomeIcon
            icon={["fab", "twitter-square"]}
            className="info-modal__twitter"
          />
        </a>
      </div>
      <img
        className="info-modal__info-modal-img"
        src="https://www.wilsons.school/history/files/image_256-687129.jpg"
        alt=""
      />

      <textarea
        className="info-modal__use-input"
        placeholder="Potential Use"
      ></textarea>
      <textarea
        className="info-modal__onwnership-input"
        type="text"
        placeholder="Ownership"
      />
      <textarea
        className="info-modal__comments"
        rows="3"
        cols="10"
        placeholder="Comments"
      ></textarea>
      <button className="primary-btn info-modal__btn">Add Comments</button>
    </div>
  );
};
export default InfoModal;
