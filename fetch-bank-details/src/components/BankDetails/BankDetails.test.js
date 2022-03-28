/* eslint-disable import/no-self-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable quotes */

import React from "react";
import { render, screen } from "@testing-library/react";
import BankDetails from "./BankDetails";

const mockDetail = {
  BANK: "ABC",
  BRANCH: "XYZ",
  IFSC: "123ABC",
};

describe("renders learn react link", () => {
  test("Bank Details : Name", () => {
    render(<BankDetails details={mockDetail} />);
    const paraElement = screen.getByText(/Bank Name/i);
    expect(paraElement).toBeInTheDocument();
  });
  test("Bank Details : Name Displayed", () => {
    render(<BankDetails details={mockDetail} />);
    const paraElement = screen.getByText(`${mockDetail.BANK}`);
    expect(paraElement).toBeInTheDocument();
  });
});
