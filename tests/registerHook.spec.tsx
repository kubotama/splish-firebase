import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";

import { useRegister } from "../hooks/registerHook";

describe("登録ブロックのカスタムフックのテスト", () => {
  it("初期状態では登録するテキストの入力領域が空である。", () => {
    const { result } = renderHook(() => useRegister());
    const textarea = result.current.textarea;
    expect(textarea).toEqual("");
  });

  it.todo("登録するテキストが空の場合、登録ボタンが無効である。");
  it.todo("登録するテキストが空でない場合、登録ボタンが有効である。");
  it.todo(
    "登録ボタンを押すと、登録するテキストに入力されたテキストが登録されたテキストに表示される。"
  );
});
