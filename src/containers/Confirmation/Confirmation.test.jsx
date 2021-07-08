import React from "react";
import { shallow, mount } from "enzyme";
import Confirmation from "./Confirmation";
import Routes from "../Routes/Routes";
import diner from "../../assets/test-images/diner.jpg";

describe("Optional confirmation form tests", () => {
  let component;

  const props = {
    setImgFile: () => console.log("setImgFile"),
    setCurrentStep: () => console.log("setCurrentStep"),
    currentLocation: [50.7163074, -1.8718383],
    setCurrentLocation: [50.7163074, -1.8718383],
    manualLocation: [50.7163074, -1.8718383],
    setManualLocation: [50.7163074, -1.8718383],
    image: diner,
  };

  beforeEach(() => {
    component = mount(
      <Confirmation
        imgData={props.image}
        setImgFile={props.setImgFile}
        setCurrentStep={props.setCurrentStep}
        currentLocation={props.currentLocation}
        setCurrentLocation={props.setCurrentLocation}
        manualLocation={props.manualLocation}
        setManualLocation={props.setManualLocation}
      />
    );
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
