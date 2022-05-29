import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../index";

describe("Home", () => {
  it("renders", () => {
    render(<Home />);
    const title = screen.getByText("SPLISH");
    expect(title).toBeInTheDocument();
  });
});
