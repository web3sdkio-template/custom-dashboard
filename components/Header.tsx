import { useAddress, useMetamask, useDisconnect } from "@web3sdkio/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Header() {
  // Helpful web3sdkio hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <Link href="/">
            <img
              src={`/logo.png`}
              alt="Web3sdkio Logo"
              className={styles.headerLogo}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
