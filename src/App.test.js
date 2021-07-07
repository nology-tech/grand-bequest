import { render, screen } from "@testing-library/react";
import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("connects to localhost", () => {
  mount(<App />);
  cy.visit("http://localhost:8080");
});
