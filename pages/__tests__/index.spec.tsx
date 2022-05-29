import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../index";

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

    it("登録されたテキスト", () => {
      const registerText = screen.getByTestId("registered-text");
      expect(registerText).toBeInTheDocument();
    });
  });

  describe("変換ブロック", () => {
    it.todo("変換ボタン");
    it.todo("変換されたテキスト");
  });

  describe("再生ブロック", () => {
    it.todo("再生ボタン");
  });
});
