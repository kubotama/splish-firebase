import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

describe("トップページ", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("タイトル", () => {
    const title = screen.getByText("SPLISH");
    expect(title).toBeInTheDocument();
  });

  describe("登録ブロック", () => {
    it("入力テキストのラベル", () => {
      const registerTextareaLabel = screen.getByText("登録するテキスト");
      expect(registerTextareaLabel).toBeInTheDocument();
    });

    it("入力テキストエリア", () => {
      const registerTextarea =
        screen.getByPlaceholderText("登録するテキストを入力してください");
      expect(registerTextarea).toBeInTheDocument();
    });

    it("登録ボタン", () => {
      const registerButton = screen.getByText("登録");
      expect(registerButton).toBeInTheDocument();
    });

    it("登録されたテキストのラベル", () => {
      const registeredTextLabel = screen.getByText("登録されたテキスト");
      expect(registeredTextLabel).toBeInTheDocument();
    });

    it("登録されたテキスト", () => {
      const registerText = screen.getByTestId("registered-text");
      expect(registerText).toBeInTheDocument();
    });
  });

  describe("変換ブロック", () => {
    it("変換ボタン", () => {
      const ttsButton = screen.getByText("変換");
      expect(ttsButton).toBeInTheDocument();
    });

    it("変換されたテキストのラベル", () => {
      const ttsedTextLabel = screen.getByText("変換されたテキスト");
      expect(ttsedTextLabel).toBeInTheDocument();
    });

    it("変換されたテキスト", () => {
      const ttsedText = screen.getByTestId("ttsed-text");
      expect(ttsedText).toBeInTheDocument();
    });
  });

  describe("再生ブロック", () => {
    it("再生ボタン", () => {
      const playButton = screen.getByText("再生");
      expect(playButton).toBeInTheDocument();
    });
  });
});
