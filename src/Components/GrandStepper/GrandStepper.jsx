import React, { useState } from "react";
import Stepper from "react-stepper-component-with-svg";

import "./GrandStepper.scss";

const GrandStepper = (props) => {
  const platform = navigator.platform;

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
        title:
          platform.includes("Win") ||
          platform.includes("Mac") ||
          platform.includes("Linux")
            ? "Details"
            : "Confirmation",
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
