import React, { useState } from "react";

export const useRegister = () => {
  const [textarea, setTextarea] = useState("");
  const [registeredText, setRegisteredText] = useState("");
  const [registerButtonDisabled, setRegisterButtonDisabled] = useState(true);

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    setTextarea(inputText);
    setRegisterButtonDisabled(inputText.length === 0);
  };

  const onClickRegister = () => {
    setRegisteredText(textarea);
  };

  return {
    textarea,
    registerButtonDisabled,
    onChangeTextarea,
    registerText: registeredText,
    onClickRegister,
  };
};
