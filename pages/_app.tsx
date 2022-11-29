import React from "react";
import type { AppProps } from "next/app";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import Header from "../components/Header";
import Head from "next/head";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdkio Custom Dashboard Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="web3sdkio example repository to showcase how to use web3sdkio's deployer to dynamically deploy any of web3sdkio's pre-built smart contracts"
        />
        <meta
          name="keywords"
          content="web3sdkio, web3sdkio deployer, web3sdkio sdk deploy contract, web3sdkio sdk, web3sdkio react, web3sdkio typescript"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Web3sdkioProvider>
  );
}

export default MyApp;
