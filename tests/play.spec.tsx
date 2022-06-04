import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../pages/index";

describe("再生ブロックのテスト", () => {
  it("初期状態では再生ボタンは無効である", () => {
    render(<Home />);
    expect(screen.getByText("再生")).toBeDisabled();
  });

  it.todo("変換されたテキストが設定されると再生ボタンが有効になる");
  it.todo("再生ボタンを押すと割り当てられた関数が呼び出される");
});
