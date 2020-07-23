import * as React from "react";
import App, { AppProps } from "next/app";
// 全体に適応する外部 CSS を読み込む
import "destyle.css";
import "./common.styl";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
