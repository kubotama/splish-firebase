import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../pages/index";

describe("登録ブロックのアクション", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("初期状態では登録するテキストの入力領域は空である。", () => {
    const textarea =
      screen.getByPlaceholderText("登録するテキストを入力してください");
    expect(textarea).toHaveValue("");
  });

  it("登録するテキストが空の場合、登録ボタンが無効である。", () => {
    expect(screen.getByText("登録")).toBeDisabled();
  });

  it("登録するテキストが空でない場合、登録ボタンが有効である。", async () => {
    await userEvent.type(
      screen.getByPlaceholderText("登録するテキストを入力してください"),
      "テキスト"
    );
    expect(screen.getByText("登録")).toBeEnabled();
  });
  it.todo(
    "登録ボタンを押すと、登録するテキストに入力されたテキストが登録されたテキストに表示される。"
  );
});
