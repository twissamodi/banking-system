/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import React from "react";
import NavBar from "./NavBar";

describe(NavBar.name, () => {
  test("Should match snapshot", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });

  test('should display "bankbazaar.com', () => {
    render(<NavBar />);
    screen.getByText("bankBazaar.com");
  });

  test("Click Home goes to Home page", () => {
    render(<NavBar />);
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
  });

  test("Click Get bank details goes to search by IFSC code page", () => {
    render(<NavBar />);
    expect(screen.getByText("Get bank details").closest("a")).toHaveAttribute(
      "href",
      "/search-by-ifsc"
    );
  });
});
