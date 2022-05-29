import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
        <div className={styles.description}>登録するテキスト</div>
        <textarea
          className={styles.textarea}
          placeholder="登録するテキストを入力してください"
        />
        <button className={styles.button}>登録</button>
        <div className={styles.description} data-testid="registered-text">
          登録されたテキスト
        </div>

        <button className={styles.button}>変換</button>
      </main>
    </div>
  );
};

export default Home;
