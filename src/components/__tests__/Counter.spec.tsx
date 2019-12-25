import React from "react";
import { render, waitForElement } from "@testing-library/react";
import Counter from "../Counter";
import rootUtils from "../../rootUtils";
jest.mock("../../rootUtils");

import axios from "axios";
import { customRender } from "customRender";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Counter", () => {
  it("counter axios usage", async () => {
    mockedAxios.get.mockResolvedValue({ data: "mocked" });

    const { getByLabelText } = render(
      <Counter initialValue={3} disabled={false}></Counter>
    );

    const input = await waitForElement(() => getByLabelText("mocked"));
    expect(input).toBeTruthy();
  });

  it("check component outside of current directory, mocked", () => {
    const result = rootUtils();

    expect(result).toBe("mocked root utils");
  });

  it("test render", () => {
    const { container } = customRender(<span>123</span>);
    expect(container).toBeTruthy();
  });
});
