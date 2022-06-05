import styles from "../styles/Home.module.css";

export const RegisterBlock: React.FC<{
  onChangeTextarea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputTextarea: string;
  registerButtonDisabled: boolean;
  onClickRegister: () => void;
  registeredText: string;
}> = ({
  onChangeTextarea,
  inputTextarea,
  registerButtonDisabled,
  onClickRegister,
  registeredText,
}) => {
  return (
    <>
      <div className={styles.description}>input text</div>
      <textarea
        className={styles.textarea}
        onChange={onChangeTextarea}
        placeholder="please input text for register"
        value={inputTextarea}
      ></textarea>
      <button
        className={styles.button}
        disabled={registerButtonDisabled}
        onClick={onClickRegister}
      >
        register
      </button>
      <div className={styles.description}>registered text</div>
      <div className={styles.description} data-testid="registered-text">
        {registeredText}
      </div>
    </>
  );
};
