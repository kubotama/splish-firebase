import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

describe("登録ブロックのアクション", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it.todo("初期状態では登録するテキストの入力領域は空である。");

  it("登録するテキストが空の場合、登録ボタンが無効である。", () => {
    expect(screen.getByText("登録")).toBeDisabled();
  });

  it.todo("登録するテキストが空でない場合、登録ボタンが有効である。");
  it.todo(
    "登録ボタンを押すと、登録するテキストに入力されたテキストが登録されたテキストに表示される。"
  );
});
