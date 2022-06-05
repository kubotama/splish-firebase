import { useState } from "react";

export const usePlay = () => {
  const onClickPlay = () => {
    console.log("play");
  };

  return {
    onClickPlay,
  };
};
