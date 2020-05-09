import '../styles/global.css'
import React from "react";
import {AppProps} from "next/app";

/**
 * グローバルCSSを適応するためのメソッド.
 *
 * @param Component
 * @param pageProps
 * @constructor
 */
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}