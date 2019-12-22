import React from "react";
import { render } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("testing", () => {
    const { container } = render(
      <Counter initialValue={1} disabled={false}></Counter>
    );
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("testing 2", () => {
    const { container } = render(
      <Counter initialValue={-2} disabled={false}></Counter>
    );
    expect(container.firstChild?.nodeName).toBe("DIV");
  });
});
