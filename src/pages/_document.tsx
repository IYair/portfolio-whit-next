import Document, { Html, Head, Main, NextScript } from "next/document";

import { AppConfig } from "../utils/AppConfig";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body className=" overflow-hidden ounded-full h-screen w-screen bg-no-repeat bg-gradient-radial from-slate-600 via-slate-800 to-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
