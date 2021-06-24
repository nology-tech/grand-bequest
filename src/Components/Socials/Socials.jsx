import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faTwitterSquare,
  fab,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faFacebookSquare, faTwitterSquare);

const Socials = () => {
  return (
    <div>
      <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.grandbequest.co.uk%2F&amp;src=sdkpreparse">
        <FontAwesomeIcon icon={["fab", "facebook-square"]} />
      </a>
      <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20old%20building,%20We%20must%20save%20it!&url=https://twitter.com/GrandBequest">
        <FontAwesomeIcon icon={["fab", "twitter-square"]} />
      </a>
    </div>
  );
};

export default Socials;
