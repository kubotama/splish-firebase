import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";

import { useTts } from "../hooks/ttsHook";

describe("変換ブロックのカスタムフックのテスト", () => {
  it("初期状態では登録されたテキストの表示領域が空である。", () => {
    const registeredText = "テキスト";
    const { result } = renderHook(() => useTts(registeredText));
    expect(result.current.ttsedText).toEqual("");
  });

  it("変換ボタンを押すと、変換されたテキストが変換されたテキストに表示される。", () => {
    const registeredText = "テキスト";
    const { result } = renderHook(() => useTts(registeredText));

    // 変換ボタンを押す
    act(() => {
      result.current.onClickTts();
    });

    // 変換されたテキストが変換されたテキストに表示される
    expect(result.current.ttsedText).toEqual("テキスト");
  });
});
