import React from "react";
import "../../App.scss";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {

  let history = useHistory();

  return (
    <div className="container">
      <p>404, get out of here!</p>

      <button className="btn-primary" onClick={() => history.push("/")}>Go Back</button>
    </div>
  );
};

export default ErrorPage;
