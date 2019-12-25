import React from "react";
import { render, RenderOptions } from "@testing-library/react";

const customRender = (
  component: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  return render(<div>test{component}</div>, options);
};

// re-export everything
export * from "@testing-library/react";

// override render method
// export { customRender as render };

export { customRender };
