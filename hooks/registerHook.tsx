import { useState } from "react";

export const useRegister = () => {
  const [textarea, setTextarea] = useState("");
  const [registeredText, setRegisteredText] = useState("");
  const [registerButtonDisabled, setRegisterButtonDisabled] = useState(true);

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
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
