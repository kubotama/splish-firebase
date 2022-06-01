import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";

import { useRegister } from "../hooks/registerHook";

describe("登録ブロックのカスタムフックのテスト", () => {
  it("初期状態では登録するテキストの入力領域が空である。", () => {
    const { result } = renderHook(() => useRegister());
    const inputTextarea = result.current.inputTextarea;
    expect(inputTextarea).toEqual("");
  });

  it("登録するテキストが空の場合、登録ボタンが無効である。", () => {
    // テスト対象のカスタムフックを呼び出す
    const { result } = renderHook(() => useRegister());
    const registeredText = result.current.registeredText;
    // 登録するテキストが空であることを確認する
    expect(registeredText).toEqual("");

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

  it("登録ボタンを押すと、登録するテキストに入力されたテキストが登録されたテキストに表示される。", () => {
    // テスト対象のカスタムフックを呼び出す
    const { result } = renderHook(() => useRegister());

    // 登録するテキストの入力領域にテキストを入力する
    act(() => {
      result.current.onChangeTextarea({
        target: { value: "テキスト" },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    // 登録ボタンを押す
    act(() => {
      result.current.onClickRegister();
    });

    // 登録するテキストの入力領域に入力されたテキストが登録されたテキストに表示されることをテストする
    expect(result.current.registeredText).toEqual("テキスト");
  });

  it("初期状態では変換ボタンが無効である。", () => {
    const { result } = renderHook(() => useRegister());
    const ttsButtonDisabled = result.current.ttsButtonDisabled;
    expect(ttsButtonDisabled).toEqual(true);
  });

  it("テキストを登録すると、変換ボタンが有効になる。", () => {
    // テスト対象のカスタムフックを呼び出す
    const { result } = renderHook(() => useRegister());

    // 変換ボタンが無効である
    expect(result.current.ttsButtonDisabled).toEqual(true);

    // 登録するテキストの入力領域にテキストを入力する
    act(() => {
      result.current.onChangeTextarea({
        target: { value: "テキスト" },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    // 登録ボタンを押す
    act(() => {
      result.current.onClickRegister();
    });

    // 変換ボタンが有効である
    expect(result.current.ttsButtonDisabled).toEqual(false);
  });
});
