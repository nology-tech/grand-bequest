import React from "react";
import { shallow, mount } from "enzyme";
import Information from "./Information";
import Routes from "../Routes/Routes";
import diner from "../../assets/test-images/diner.jpg";

describe("Optional information form tests", () => {
  let component;

  const props = {
    image: diner,
  };

  beforeEach(() => {
    component = mount(<Information imgData={props.image} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should validate email", () => {
    const emailInput = component.find(".form__label-email");
    const email = "abc@hotmail.co.uk";

    emailInput.simulate("change", {
      currentTarget: { value: email },
    });

    const submitButton = component.find('[type="submit"]');
    submitButton.simulate("click");

    expect(emailInput.text()).toBe(email);
  });
});
