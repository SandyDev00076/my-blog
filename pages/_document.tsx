import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
        <body>
          <Header />
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
