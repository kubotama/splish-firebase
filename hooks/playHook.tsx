import { useState } from "react";

export const usePlay = () => {
  const [playButtonDisabled, setPlayButtonDisabled] = useState(true);

  return {
    playButtonDisabled,
  };
};
