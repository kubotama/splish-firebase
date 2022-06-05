import "@testing-library/jest-dom";

import { renderHook, act } from "@testing-library/react-hooks";

import { useTts } from "../hooks/ttsHook";
import { usePlay } from "../hooks/playHook";

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
    const { result } = renderHook(() => usePlay());
    const spiedPlay = jest.spyOn(result.current, "onClickPlay");
    act(() => {
      result.current.onClickPlay();
    });
    expect(spiedPlay).toHaveBeenCalledTimes(1);
  });
});
