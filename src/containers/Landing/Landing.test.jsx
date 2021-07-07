import React from "react";
import { shallow, mount } from "enzyme";
import Landing from "./Landing";
import Routes from "../Routes/Routes";
import diner from "../../assets/test-images/diner.jpg";

describe("Landing information form tests", () => {
  let component;

  beforeEach(() => {
    component = mount(<Landing />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
