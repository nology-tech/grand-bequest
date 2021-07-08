import React, { useState } from "react";
import "./InfoModal.scss";
import Socials from "../Socials/Socials";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faTwitterSquare,
  fab,
  faHeart,
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
      <div className="info-modal__heart">
        <FontAwesomeIcon
          icon={["far", "heart"]}
          className="info-modal__favourites-icon"
        />
      </div>
      <img
        className="info-modal__info-modal-img"
        src="https://www.wilsons.school/history/files/image_256-687129.jpg"
        alt=""
      />
      <label htmlFor="potential use" className="info-modal__label">
        Potential Use
      </label>
      <textarea className="info-modal__use-input"></textarea>
      <label htmlFor="ownership" className="info-modal__label">
        Ownership
      </label>
      <textarea className="info-modal__onwnership-input" type="text" />
      <label htmlFor="comments" className="info-modal__label">
        Comments
      </label>
      <textarea className="info-modal__comments" rows="3" cols="10"></textarea>
      <button className="primary-btn info-modal__btn">Add Comments</button>
    </div>
  );
};
export default InfoModal;
