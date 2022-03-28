/* eslint-disable quotes */
import axiosMock from "axios";
import { BACKEND_URL, getBankName } from "../constants/apiEndpoints";
import makeRequest from "./makeRequest";

jest.mock("axios");

describe("makeRequest", () => {
  it("should load and display the data", async () => {
    axiosMock.mockResolvedValueOnce({
      data: {
        BANK_NAMES: [
          "ABHYUDAYA COOPERATIVE BANK LIMITED",
          "THE AKOLA DISTRICT CENTRAL COOPERATIVE BANK",
        ],
      },
    });

    await makeRequest(getBankName);
    expect(axiosMock).toHaveBeenCalledTimes(1);
    expect(axiosMock).toHaveBeenCalledWith({
      url: `${BACKEND_URL}/getBankNames`,
      method: "get",
      data: {},
    });
  });
});
