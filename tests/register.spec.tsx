import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../pages/index";

describe("test for register block", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("input textarea is empty in initial state", () => {
    const textarea = screen.getByPlaceholderText(
      "please input text for register"
    );
    expect(textarea).toHaveValue("");
  });

  it("registered text is empty in initial state", () => {
    const registeredText = screen.getByTestId("registered-text");
    expect(registeredText).toHaveTextContent("");
  });

  it("register button is disabled if input text is empty", () => {
    expect(screen.getByText("register")).toBeDisabled();
  });

  it("register button is enabled if input text is not empty", async () => {
    await userEvent.type(
      screen.getByPlaceholderText("please input text for register"),
      "GNtbLdMaj4n5rUNtkfg6uyaI3Q4kC5PVETeYvIjApoe8Q3UPz85reiLt4avrQIdBJXH0rWhP7NCnn3XXRLvdGXADCC22lSDpPW1z"
    );
    expect(screen.getByText("register")).toBeEnabled();
  });
  it("registered text is displayed if register button is clicked", async () => {
    await userEvent.type(
      screen.getByPlaceholderText("please input text for register"),
      "KdA02HvdnHTkN297Q9nkGAdbgxdiDTkTEITgB2zaaeUibymlHx2XF3IUIa83oogz5pPTS9UuNE4fvtY4GloHkLFLrJ9k2apCHZRf"
    );
    await userEvent.click(screen.getByText("register"));

    expect(screen.getByTestId("registered-text")).toHaveTextContent(
      "KdA02HvdnHTkN297Q9nkGAdbgxdiDTkTEITgB2zaaeUibymlHx2XF3IUIa83oogz5pPTS9UuNE4fvtY4GloHkLFLrJ9k2apCHZRf"
    );
  });

  it("tts button is disabled in initial state", () => {
    expect(screen.getByText("text to speech")).toBeDisabled();
  });

  it("tts button is enabled if text is registered", async () => {
    await userEvent.type(
      screen.getByPlaceholderText("please input text for register"),
      "dsUurFvaP1m3w5nYwoDOIfy06iicWkcMeRreSPHrWdN6217wSOJR7Rj8jG6fpMaYXDiisPIkUgoyJ3typWsmofrmaGGJ44BvJjUZ"
    );
    await userEvent.click(screen.getByText("register"));

    expect(screen.getByText("text to speech")).toBeEnabled();
  });
});
