import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";

import { useTts } from "../hooks/ttsHook";

describe("変換ブロックのカスタムフックのテスト", () => {
  it("初期状態では登録されたテキストの表示領域が空である。", () => {
    const registeredText = "テキスト";
    const { result } = renderHook(() => useTts(registeredText));
    expect(result.current.ttsedText).toEqual("");
  });

  it.todo("初期状態では変換ボタンが無効である。");
  it.todo("登録されたテキストが空でない場合、変換ボタンが有効である。");
  it.todo(
    "変換ボタンを押すと、変換されたテキストが変換されたテキストに表示される。"
  );
});
