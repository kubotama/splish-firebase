import React, { useState } from "react";

export const useRegister = () => {
  const [inputTextarea, setInputTextarea] = useState("");
  const [registeredText, setRegisteredText] = useState("");
  const [registerButtonDisabled, setRegisterButtonDisabled] = useState(true);
  const [ttsButtonDisabled, setTtsButtonDisabled] = useState(true);

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    setInputTextarea(inputText);
    setRegisterButtonDisabled(inputText.length === 0);
  };

  const onClickRegister = () => {
    setRegisteredText(inputTextarea);
    setTtsButtonDisabled(inputTextarea.length === 0);
  };

  return {
    inputTextarea,
    registerButtonDisabled,
    ttsButtonDisabled,
    onChangeTextarea,
    registeredText,
    onClickRegister,
  };
};
