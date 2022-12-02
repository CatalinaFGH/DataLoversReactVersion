import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import FirstPage from "./FirstPage";

describe("Button", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <FirstPage />
      </BrowserRouter>
    );
    const textContent = getByText(/enter/i);
    expect(textContent).toBeDefined();
  });
});
