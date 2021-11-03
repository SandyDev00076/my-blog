import Head from "next/head";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs | Sanjeet Tiwari</title>
        <meta name="description" content="Blogs by me" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <h1 className={styles.name}>Sanjeet Tiwari</h1>
    </div>
  );
}
