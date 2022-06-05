import styles from "../styles/Home.module.css";

export const TtsBlock: React.FC<{
  ttsButtonDisabled: boolean;
  onClickTts: () => void;
  ttsedText: string;
}> = ({ ttsButtonDisabled, onClickTts, ttsedText }) => {
  return (
    <>
      {/* tts(text to speech) block */}
      {/* tts button */}
      <button
        className={styles.button}
        disabled={ttsButtonDisabled}
        onClick={onClickTts}
      >
        text to speech
      </button>
      {/* label of ttsed text */}
      <div className={styles.description}>speech text</div>
      {/* display area for ttsed text(ttsedText) */}
      <div className={styles.description} data-testid="ttsed-text">
        {ttsedText}
      </div>
      {/* tts block end */}
    </>
  );
};
