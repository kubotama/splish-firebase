import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";

import { useTts } from "../hooks/ttsHook";

describe("tests for custom hooks of tts block", () => {
  it("registered text is empty in initial state", () => {
    const registeredText =
      "AC9ChKufERG7IYuN6DsV9FvWUUE3vOrarqVNiesL5OMfGaYGQqLhIhWC9Igoa1lYh0CaIUFEjNVJF1WqjpeOw8HZfSVnnGQn8CYN";
    const { result } = renderHook(() => useTts(registeredText));
    expect(result.current.ttsedText).toEqual("");
  });

  it("ttsed text is displayed if tts button is clicked", () => {
    const registeredText =
      "qyJgNO2qclf4S2ZIXxI7ylHIvvsUyB1whgv5WTd6Ks6MRU2jPETOpbF4omdywNyq7CzUjLLwT5QvdCKQddkdXGN83rrdYUJorBkV";
    const { result } = renderHook(() => useTts(registeredText));

    act(() => {
      result.current.onClickTts();
    });

    expect(result.current.ttsedText).toEqual(registeredText);
  });
});
