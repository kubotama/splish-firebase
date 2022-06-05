import styles from "../styles/Home.module.css";

export const PlayBlock: React.FC<{
  playButtonDisabled: boolean;
  onClickPlay: () => void;
}> = ({ playButtonDisabled, onClickPlay }) => {
  return (
    <>
      {/* play block */}
      {/* play button */}
      <button
        className={styles.button}
        disabled={playButtonDisabled}
        onClick={onClickPlay}
      >
        play
      </button>
      {/* play block end */}
    </>
  );
};
