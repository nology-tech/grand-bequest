import React, {} from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
        <li>
          <Link to="/confirmation">Confirmation</Link>
        </li>
        <li>
          <Link to="/rg45tg45g5">Check Error</Link>
        </li>
      </ul>
    </nav>
      
    </>
  );
};

export default NavBar;