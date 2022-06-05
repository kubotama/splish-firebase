import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";

import { useRegister } from "../hooks/registerHook";

describe("tests for custom hook of register block", () => {
  it("input textarea is empty in initial state", () => {
    const { result } = renderHook(() => useRegister());
    const inputTextarea = result.current.inputTextarea;
    expect(inputTextarea).toEqual("");
  });

  it("register button is disabled if input textarea is empty", () => {
    const { result } = renderHook(() => useRegister());
    const registeredText = result.current.registeredText;
    // check register button is disabled
    expect(registeredText).toEqual("");

    const registerButtonDisabled = result.current.registerButtonDisabled;
    // check register button is disabled
    expect(registerButtonDisabled).toEqual(true);
  });

  it("registered button is enabled if input textarea is not empty", () => {
    const { result } = renderHook(() => useRegister());

    act(() => {
      result.current.onChangeTextarea({
        target: {
          value:
            "ydXQLpnaeSNMUt48rJGPZBZ9gPvL1aZ1NRAxbepsVn1yc6kwtrItEjIUn5rtx0kKsUQiZnE19lShxn8N5RftRBpI0jQx7ePdVpEP",
        },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    expect(result.current.registerButtonDisabled).toEqual(false);
  });

  it("registered text is displayed if registered button is clicked", () => {
    const { result } = renderHook(() => useRegister());
    const testData =
      "HD7uVJpIUus9o4RgzmyVj96Ib8aIJFPAGy7EsMR7mcyT3s2fujQSv9aOOAtZT4V8JEuGRnqffodYkYD3JIhj9afJf68ANrpGsPsf";

    act(() => {
      result.current.onChangeTextarea({
        target: {
          value: testData,
        },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    act(() => {
      result.current.onClickRegister();
    });

    expect(result.current.registeredText).toEqual(testData);
  });

  it("tts button is disabled in initial state", () => {
    const { result } = renderHook(() => useRegister());
    const ttsButtonDisabled = result.current.ttsButtonDisabled;
    expect(ttsButtonDisabled).toEqual(true);
  });

  it("tts button is enabled if text is registered", () => {
    const { result } = renderHook(() => useRegister());

    // check register button is disabled
    expect(result.current.ttsButtonDisabled).toEqual(true);

    act(() => {
      result.current.onChangeTextarea({
        target: {
          value:
            "nUbRdiPwaYQKsd1yNPU2pdQcZFgpcPgc4WLQJPqtMMrm3durbmuNQ7YuYdKZqonsn9XMuKbxZw3W9VgLbZbZ8liPCBVKa43YNEAQ",
        },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    act(() => {
      result.current.onClickRegister();
    });

    expect(result.current.ttsButtonDisabled).toEqual(false);
  });
});
