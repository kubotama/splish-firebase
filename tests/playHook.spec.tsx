import "@testing-library/jest-dom";

import { renderHook, act } from "@testing-library/react-hooks";

import { useTts } from "../hooks/ttsHook";

describe("再生ブロックのカスタムフックのテスト", () => {
  it("初期状態では再生ボタンは無効である", () => {
    const { result } = renderHook(() => useTts("テキスト"));
    expect(result.current.playButtonDisabled).toEqual(true);
  });

  it("変換されたテキストが設定されると再生ボタンが有効になる", () => {
    const { result } = renderHook(() => useTts("テキスト"));
    act(() => {
      result.current.onClickTts();
    });
    expect(result.current.playButtonDisabled).toEqual(false);
  });

  it("再生ボタンを押すと割り当てられた関数が呼び出される", () => {
    const registeredText = "テキスト";
    const { result } = renderHook(() => useTts(registeredText));
    const spiedTts = jest.spyOn(result.current, "onClickTts");
    act(() => {
      result.current.onClickTts();
    });
    expect(spiedTts).toHaveBeenCalledTimes(1);
  });
});
