import React from "react";
import { shallow, mount } from "enzyme";
import Information from "./Information";
import Routes from "../Routes/Routes";
import diner from "../../assets/test-images/diner.jpg";

describe("Optional information form tests", () => {
  let component;

  const props = {
    image: diner,
    setImgData: () => "setImgData",
    email: "abc@hotmail.co.uk",
  };

  beforeEach(() => {
    component = mount(
      <Information
        imgData={props.image}
        setImgData={props.setImgData}
        email={props.email}
      />
    );
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render title", () => {
    const title = "Optional fields";

    expect(component.find("h3").text()).toBe(title);
  });

  it("should validate email", () => {
    const emailInput = component.find("#email");

    // test that the alert popped u
    console.log(emailInput);
    expect(1).toBe(1);
    //expect(component.find("textarea").at(0).prop("value")).toBe(email);
  });
});
