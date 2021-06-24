import React from "react";
import "./InfoModal.scss";
import Socials from "../Socials/Socials";

const InfoModal = () => {
  return (
    <div className="info-modal">
      {/* <Socials className="infoModal-socials" /> */}
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
        rows="5"
        cols="10"
        placeholder="Comments"
      ></textarea>
      <button className="primary-btn">Add Comments</button>
    </div>
  );
};
export default InfoModal;
