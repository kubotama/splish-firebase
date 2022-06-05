import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

describe("home page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("title", () => {
    const title = screen.getByText("SPLISH");
    expect(title).toBeInTheDocument();
  });

  describe("register block", () => {
    it("label of input text", () => {
      const registerTextareaLabel = screen.getByText("input text");
      expect(registerTextareaLabel).toBeInTheDocument();
    });

    it("input textarea", () => {
      const registerTextarea = screen.getByPlaceholderText(
        "please input text for register"
      );
      expect(registerTextarea).toBeInTheDocument();
    });

    it("register button", () => {
      const registerButton = screen.getByText("register");
      expect(registerButton).toBeInTheDocument();
    });

    it("label of registered text", () => {
      const registeredTextLabel = screen.getByText("registered text");
      expect(registeredTextLabel).toBeInTheDocument();
    });

    it("registered text", () => {
      const registerText = screen.getByTestId("registered-text");
      expect(registerText).toBeInTheDocument();
    });
  });

  describe("tts block", () => {
    it("tts button", () => {
      const ttsButton = screen.getByText("text to speech");
      expect(ttsButton).toBeInTheDocument();
    });

    it("label of ttsed text", () => {
      const ttsedTextLabel = screen.getByText("speech text");
      expect(ttsedTextLabel).toBeInTheDocument();
    });

    it("ttsed text", () => {
      const ttsedText = screen.getByTestId("ttsed-text");
      expect(ttsedText).toBeInTheDocument();
    });
  });

  describe("play block", () => {
    it("play button", () => {
      const playButton = screen.getByText("play");
      expect(playButton).toBeInTheDocument();
    });
  });
});
