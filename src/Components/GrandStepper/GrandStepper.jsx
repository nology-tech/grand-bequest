import React from "react";
import Stepper from "react-stepper-component-with-svg";

import "./GrandStepper.scss";

const GrandStepper = () => {
  const platform = navigator.platform;

  const stepperData = {
    currentStep: 1,
    outerCircleBorderColor: "#ccc",
    innerCircleBorderColor: "#ccc",
    counterTextColor: "#ccc",
    labelTextColor: "#ccc",
    completedIndicatorColor: "green",
    completedTextColor: "#fff",
    connectorColor: "#ccc",
    completedLabelColor: "green",
    activeIndicator: "#006400",
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
    ],
  };
  return (
    <div className="grand-stepper">
      <Stepper stepperData={stepperData} />
    </div>
  );
};
export default GrandStepper;
