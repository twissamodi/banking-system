/* eslint-disable comma-dangle */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable quotes */

import { render, screen } from "@testing-library/react";
import React from "react";
import Dropdown from "./Dropdown";

describe("Search By IFSC Page testing", () => {
  test(`If the IFSC Input element is present`, () => {
    const mockFunction = () => {};

    render(
      <Dropdown
        action="Select"
        options={["bank1", "bank2"]}
        onChange={mockFunction}
      />
    );
    const inputElement = screen.getByText(/bank1/i);
    expect(inputElement).toBeTruthy();
  });
});
