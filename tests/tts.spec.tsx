import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../pages/index";

describe("変換ブロックのカスタムフックのテスト", () => {
  it("初期状態では変換されたテキストの表示領域が空である。", () => {
    render(<Home />);
    const ttsedText = screen.getByTestId("ttsed-text");
    expect(ttsedText).toHaveTextContent("");
  });

  it.todo("初期状態では変換ボタンが無効である。");
  it.todo("登録されたテキストが空でない場合、変換ボタンが有効である。");
  it.todo("変換ボタンを押すと変換されたテキストに表示される。");
});
