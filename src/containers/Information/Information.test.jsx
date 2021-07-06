import React from "react";
import { shallow, mount } from "enzyme";
import Information from "./Information";
import Routes from "../Routes/Routes";
import "../../assets/test-images";
// get props

describe("Optional information form tests", () => {
  let component;

  beforeEach(() => {
    component =
      mount();
      // <Information imgData={props.imgData} setImgData={props.setImgData} />
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
