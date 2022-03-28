/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable quotes */
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import HomePage from "./HomePage";

//const handleClick = jest.fn();
describe("Home Page testing", () => {
  test(`Submit button`, () => {
    render(<HomePage />);
    const submitElement = screen.getByText("Submit");
    expect(submitElement).toBeTruthy();
  });

  test("Submit button", () => {
    render(<HomePage />);
    const button = screen.getByRole("button", { name: /Submit/i });
    expect(button).toHaveClass("dropdown-submit");
  });

  test("Submit button on Click", () => {
    render(<HomePage />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    // expect(handleClick).toHaveBeenCalled();
  });
});

// describe("Test Button component", () => {
//   it("Test click event", () => {
//     const mockCallBack = jest.fn();
//     const button = screen.getByRole("button");
//     button.simulate("click");
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });
