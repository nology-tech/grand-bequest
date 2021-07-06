import React, { useState } from "react";
import Stepper from "react-stepper-component-with-svg";

import "./GrandStepper.scss";

const GrandStepper = (props) => {
  //"green"

  const stepperData = {
    currentStep: props.step,
    outerCircleBorderColor: "#ccc",
    innerCircleBorderColor: "#ccc",
    counterTextColor: "#ccc",
    labelTextColor: "#000000",
    completedIndicatorColor: "#008379",
    completedTextColor: "#fff",
    connectorColor: "#ccc",
    completedLabelColor: "#000000",
    activeIndicator: "#000000",
    steps: [
      {
        title: "Home",
      },
      {
        title: window.screen.width > 1050 ? "Details" : "Confirmation",
      },
      {
        title: "Submit",
      },
      {
        title: "Completed",
      },
    ],
  };
  return (
    <div className="grand-stepper">
      <Stepper stepperData={stepperData} />
    </div>
  );
};
export default GrandStepper;
