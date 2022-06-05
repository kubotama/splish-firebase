import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useRegister } from "../hooks/registerHook";
import { useTts } from "../hooks/ttsHook";
import { usePlay } from "../hooks/playHook";

const Home: NextPage = () => {
  const {
    inputTextarea,
    registerButtonDisabled,
    ttsButtonDisabled,
    onChangeTextarea,
    registeredText,
    onClickRegister,
  } = useRegister();

  const { ttsedText, onClickTts } = useTts(registeredText);

  const { onClickPlay } = usePlay();

  return (
    <div className={styles.container}>
      <Head>
        <title>SPLISH</title>
        <meta
          name="description"
          content="SPLISH is acronym of Speak, Listen and Shadow"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SPLISH</h1>

        {/* register block */}
        {/* label of register text */}
        <div className={styles.description}>input text</div>
        {/* input textarea for registring text */}
        <textarea
          className={styles.textarea}
          onChange={onChangeTextarea}
          placeholder="please input text for register"
          value={inputTextarea}
        ></textarea>
        {/* register button */}
        <button
          className={styles.button}
          disabled={registerButtonDisabled}
          onClick={onClickRegister}
        >
          register
        </button>
        {/* label of registered text */}
        <div className={styles.description}>registered text</div>
        {/* display area for registered text(registeredText) */}
        <div className={styles.description} data-testid="registered-text">
          {registeredText}
        </div>
        {/* register block end */}

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

        {/* play block */}
        {/* play button */}
        <button
          className={styles.button}
          disabled={registerButtonDisabled}
          onClick={onClickPlay}
        >
          play
        </button>
        {/* play block end */}
      </main>
    </div>
  );
};

export default Home;
