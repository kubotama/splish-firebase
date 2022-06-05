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

        {/* 登録ブロック */}
        {/* 登録するテキストのラベル */}
        <div className={styles.description}>登録するテキスト</div>
        {/* 登録するテキストの入力領域(inputTextarea) */}
        <textarea
          className={styles.textarea}
          onChange={onChangeTextarea}
          placeholder="登録するテキストを入力してください"
          value={inputTextarea}
        ></textarea>
        {/* 登録ボタン(registerButton) */}
        <button
          className={styles.button}
          disabled={registerButtonDisabled}
          onClick={onClickRegister}
        >
          登録
        </button>
        {/* 登録されたテキストのラベル(registeredLabel) */}
        <div className={styles.description}>登録されたテキスト</div>
        {/* 登録されたテキストの表示領域(registeredText) */}
        <div className={styles.description} data-testid="registered-text">
          {registeredText}
        </div>
        {/* 登録ブロック 終わり */}

        {/* 変換ブロック */}
        {/* 変換ボタン(ttsButton) */}
        <button
          className={styles.button}
          disabled={ttsButtonDisabled}
          onClick={onClickTts}
        >
          変換
        </button>
        {/* 変換されたテキストのラベル(ttsedLabel) */}
        <div className={styles.description}>変換されたテキスト</div>
        {/* 変換されたテキストの表示領域(ttsedText) */}
        <div className={styles.description} data-testid="ttsed-text">
          {ttsedText}
        </div>
        {/* 変換ブロック 終わり */}

        {/* 再生ブロック */}
        {/* 再生ボタン(playButton) */}
        <button
          className={styles.button}
          disabled={registerButtonDisabled}
          onClick={onClickPlay}
        >
          再生
        </button>
        {/* 再生ブロック 終わり */}
      </main>
    </div>
  );
};

export default Home;
