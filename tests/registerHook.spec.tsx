import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";

import { useRegister } from "../hooks/registerHook";

describe("登録ブロックのカスタムフックのテスト", () => {
  it("初期状態では登録するテキストの入力領域が空である。", () => {
    const { result } = renderHook(() => useRegister());
    const textarea = result.current.textarea;
    expect(textarea).toEqual("");
  });

  it("登録するテキストが空の場合、登録ボタンが無効である。", () => {
    // テスト対象のカスタムフックを呼び出す
    const { result } = renderHook(() => useRegister());
    const registerText = result.current.registerText;
    // 登録するテキストが空であることを確認する
    expect(registerText).toEqual("");

    const registerButtonDisabled = result.current.registerButtonDisabled;
    // 登録ボタンが無効であることをテストする
    expect(registerButtonDisabled).toEqual(true);
  });

  it("登録するテキストが空でない場合、登録ボタンが有効である。", () => {
    // テスト対象のカスタムフックを呼び出す
    const { result } = renderHook(() => useRegister());

    // 登録するテキストにテキストを入力する
    act(() => {
      result.current.onChangeTextarea({
        target: { value: "テキスト" },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    // 登録ボタンが有効であることをテストする
    expect(result.current.registerButtonDisabled).toEqual(false);
  });

  it.todo(
    "登録ボタンを押すと、登録するテキストに入力されたテキストが登録されたテキストに表示される。"
  );
});
