import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../pages/index";

describe("変換ブロックのカスタムフックのテスト", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("初期状態では変換されたテキストの表示領域が空である。", () => {
    const ttsedText = screen.getByTestId("ttsed-text");
    expect(ttsedText).toHaveTextContent("");
  });

  it("初期状態では変換ボタンが無効である。", () => {
    expect(screen.getByText("変換")).toBeDisabled();
  });

  it("登録されたテキストが空でない場合、変換ボタンが有効である。", async () => {
    //  最初は変換ボタンは無効
    expect(screen.getByText("変換")).toBeDisabled();

    // 入力欄に文字列を入力
    await userEvent.type(
      screen.getByPlaceholderText("登録するテキストを入力してください"),
      "テキスト"
    );

    // 登録ボタンをクリック
    await userEvent.click(screen.getByText("登録"));

    // 変換ボタンが有効になる
    expect(screen.getByText("変換")).toBeEnabled();
  });

  it.todo("変換ボタンを押すと変換されたテキストに表示される。");
});
