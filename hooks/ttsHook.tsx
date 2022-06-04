import React, { useState } from "react";

export const useTts = (registeredText: string) => {
  const [ttsedText, setTtsedText] = useState("");
  const [playButtonDisabled, setPlayButtonDisabled] = useState(true);

  const onClickTts = () => {
    setTtsedText(registeredText);
    setPlayButtonDisabled(registeredText === "");
  };

  return {
    ttsedText,
    playButtonDisabled,
    onClickTts,
  };
};
