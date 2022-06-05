import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../pages/index";

const spyPlay = jest.fn();
jest.mock("../hooks/playHook", () => ({
  usePlay: () => ({ onClickPlay: spyPlay }),
}));

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

  it("called the assigned function if play button is clicked", async () => {
    render(<Home />);
    // type the text in input textarea
    await userEvent.type(
      screen.getByPlaceholderText("登録するテキストを入力してください"),
      "dlgcenbfihotrkspjmqa"
    );
    // click register button
    await userEvent.click(screen.getByText("登録"));

    // clock tts(text-to-speech) button
    await userEvent.click(screen.getByText("変換"));

    // check if the play button is enabled
    expect(screen.getByText("再生")).toBeEnabled();

    // click play button
    await userEvent.click(screen.getByText("再生"));

    // check if the assigned function is called
    expect(spyPlay).toHaveBeenCalledTimes(1);
  });
});
