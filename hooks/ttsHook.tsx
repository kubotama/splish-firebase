import React, { useState } from "react";

export const useTts = (registeredText: string) => {
  const [ttsedText, setTtsedText] = useState("");

  const onClickTts = () => {
    setTtsedText(registeredText);
  };

  return {
    ttsedText,
    onClickTts,
  };
};
