import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../index";

describe("トップページ", () => {
  it("タイトル", () => {
    render(<Home />);
    const title = screen.getByText("SPLISH");
    expect(title).toBeInTheDocument();
  });

  describe("登録ブロック", () => {
    it("入力テキストのラベル", () => {
      render(<Home />);
      const registerTextareaLabel = screen.getByText("登録するテキスト");
      expect(registerTextareaLabel).toBeInTheDocument();
    });
  });
});
