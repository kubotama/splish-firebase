import "@testing-library/jest-dom";

import { renderHook, act } from "@testing-library/react-hooks";

import { useTts } from "../hooks/ttsHook";
import { usePlay } from "../hooks/playHook";

describe("test for cusutom hook of play block", () => {
  it("play button is disabled in initial state", () => {
    const { result } = renderHook(() =>
      useTts(
        "KZTPu4fMkcuxZn0guIsDhCY3lQqhMWbhOYZJb88dAte0ie5UMCyGzVpdCP2Yc3UyN5tBGRQKM1RTovl5IvUoHebI1RcUPkcF5RX1"
      )
    );
    expect(result.current.playButtonDisabled).toEqual(true);
  });

  it("play button is enabled if tts button is clicked and ttsed text is set", () => {
    const { result } = renderHook(() =>
      useTts(
        "fCD8HgddnQqCym6FMbT3jtT2YtI9AhpUHIRfSpyKHTbcdasp5NSDQLLxp2UrKPbqi1owxRoC0t4NCoGNJkqkob9icc6eegTImxKs"
      )
    );
    act(() => {
      result.current.onClickTts();
    });
    expect(result.current.playButtonDisabled).toEqual(false);
  });

  it("assigned function is called if play button clicked", () => {
    const { result } = renderHook(() => usePlay());
    const spiedPlay = jest.spyOn(result.current, "onClickPlay");
    act(() => {
      result.current.onClickPlay();
    });
    expect(spiedPlay).toHaveBeenCalledTimes(1);
  });
});
