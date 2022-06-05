import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { RegisterBlock } from "../components/registerBlock";
import { TtsBlock } from "../components/ttsBlock";

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

  const { ttsedText, playButtonDisabled, onClickTts } = useTts(registeredText);

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

        <RegisterBlock
          onChangeTextarea={onChangeTextarea}
          inputTextarea={inputTextarea}
          registerButtonDisabled={registerButtonDisabled}
          onClickRegister={onClickRegister}
          registeredText={registeredText}
        />

        <TtsBlock
          ttsButtonDisabled={ttsButtonDisabled}
          onClickTts={onClickTts}
          ttsedText={ttsedText}
        />

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
      </main>
    </div>
  );
};

export default Home;
