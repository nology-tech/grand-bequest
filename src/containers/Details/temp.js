import React from "react";
import { shallow, mount } from "enzyme";
import Details from "./Details";
import Routes from "../Routes/Routes";
import diner from "../../assets/test-images/diner.jpg";

// describe("Detail tests", () => {
//   let component;

//   const props = {
//     image: diner,
//     setImgData: () => "setImgData",
//     email: "",
//   };

//   beforeEach(() => {
//     component = mount(
//       <Details
//         //setCurrentStep={setCurrentStep}
//         imgData={props.image}
//         //setImgData={props.setImgData}
//         //imgFile={props.imgFile}
//       />
//     );
//   });

//   it("should render", () => {
//     expect(component).toBeTruthy();
//   });

// it("should validate email", () => {
//   const emailInput = component.find(".form__label-email");
//   const email = "abc@hotmail.co.uk";

//   emailInput.simulate("change", {
//     currentTarget: { value: email },
//   });

//   const submitButton = component.find('[type="submit"]');
//   submitButton.simulate("click");

//   expect(emailInput.text()).toBe(email);
// });
// });
