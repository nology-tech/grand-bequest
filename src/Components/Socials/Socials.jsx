import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  fab,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

library.add(fab, faFacebookSquare, faTwitterSquare, faInstagramSquare);

const Socials = () => {
  return (
    <div className="socials__Container">
      <div className="socials__Container-Icons">
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.grandbequest.co.uk%2F&amp;src=sdkpreparse">
          <FontAwesomeIcon icon={["fab", "facebook-square"]} />
        </a>
        <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20old%20building,%20We%20must%20save%20it!&url=https://twitter.com/GrandBequest">
          <FontAwesomeIcon icon={["fab", "twitter-square"]} />
        </a>
        <a href="https://www.instagram.com/grandbequest/?hl=en">
          <FontAwesomeIcon icon={["fab", "instagram-square"]} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
