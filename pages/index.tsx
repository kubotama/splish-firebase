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
      </main>
    </div>
  );
};

export default Home;
