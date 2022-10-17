import Document, { Html, Head, Main, NextScript } from "next/document";

import { AppConfig } from "../utils/AppConfig";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
          </Head>
        <body className=" overflow-hidden ounded-full h-screen w-screen bg-no-repeat bg-gradient-radial from-vingateBlue to-midnigth">
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
