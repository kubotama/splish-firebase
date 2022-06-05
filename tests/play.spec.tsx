import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../pages/index";

describe("再生ブロックのテスト", () => {
  it("初期状態では再生ボタンは無効である", () => {
    render(<Home />);
    expect(screen.getByText("再生")).toBeDisabled();
  });

  it("play button is enabled if ttsed text is set", async () => {
    render(<Home />);
    // type the text in input textarea
    await userEvent.type(
      screen.getByPlaceholderText("登録するテキストを入力してください"),
      "テキスト"
    );
    // click register button
    await userEvent.click(screen.getByText("登録"));

    // clock tts(text-to-speech) button
    await userEvent.click(screen.getByText("変換"));

    // check if the play button is enabled
    expect(screen.getByText("再生")).toBeEnabled();
  });

  it.todo("再生ボタンを押すと割り当てられた関数が呼び出される");
});
