import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../pages/index";

describe("tests for custom hooks of tts block", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("ttsed text is empty in initial state", () => {
    const ttsedText = screen.getByTestId("ttsed-text");
    expect(ttsedText).toHaveTextContent("");
  });

  it("tts button is disabled in initial state", () => {
    expect(screen.getByText("text to speech")).toBeDisabled();
  });

  it("tts button is enable if registered text is not empty", async () => {
    // checj tts button is disabled in initial state
    expect(screen.getByText("text to speech")).toBeDisabled();

    await userEvent.type(
      screen.getByPlaceholderText("please input text for register"),
      "NU0aC4xQAIpcESEOz04eyHCkgRyDcjlafIRHLXPFnTIrT6qqbliqD6qnLR5exJMRQUz93YkeYHn9fZmU43cIWuc9kuexg9qecj3t"
    );

    await userEvent.click(screen.getByText("register"));

    expect(screen.getByText("text to speech")).toBeEnabled();
  });

  it("ttsed text is displayed if tts button is clicked", async () => {
    // check tts button is disabled in initial state
    const ttsedText = screen.getByTestId("ttsed-text");
    expect(ttsedText).toHaveTextContent("");

    const testData =
      "qALEAI9nzgDpf4jdcADyOCu0e3sKAjRIYoV7xluMo63UuaTUUKoBpBt4lbW5fWnEPlituQlEJKsXwoCd8QDl6cUGyVTn9Pidy6u6";
    await userEvent.type(
      screen.getByPlaceholderText("please input text for register"),
      testData
    );

    // 登録ボタンをクリック
    await userEvent.click(screen.getByText("register"));

    // 変換ボタンがクリック
    await userEvent.click(screen.getByText("text to speech"));

    // 変換されたテキストが表示される
    expect(ttsedText).toHaveTextContent(testData);
  });
});
