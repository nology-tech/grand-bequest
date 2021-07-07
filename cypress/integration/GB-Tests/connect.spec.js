import { render, screen } from "@testing-library/react";
import React from "react";
import { mount } from "@cypress/react";
import App from "../../../src/App";

describe("connects to app", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000");
  });
});
