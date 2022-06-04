import "@testing-library/jest-dom";

import { renderHook, act } from "@testing-library/react-hooks";

import { useTts } from "../hooks/ttsHook";

describe("再生ブロックのカスタムフックのテスト", () => {
  it("初期状態では再生ボタンは無効である", () => {
    const { result } = renderHook(() => useTts("テキスト"));
    const playButtonDisabled = result.current.playButtonDisabled;
    expect(playButtonDisabled).toEqual(true);
  });

  it.todo("変換されたテキストが設定されると再生ボタンが有効になる");
  it.todo("再生ボタンを押すと割り当てられた関数が呼び出される");
});
