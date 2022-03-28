/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable quotes */
import { render, screen } from "@testing-library/react";
import React from "react";
import SearchByIFSCPage from "./SearchByIFSCPage";

describe("Search By IFSC Page testing", () => {
  test(`If the IFSC Input element is present`, () => {
    render(<SearchByIFSCPage />);
    const inputElement = screen.getByTestId("ifsc-input-id");
    expect(inputElement).toBeTruthy();
  });
});
