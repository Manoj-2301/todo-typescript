
import styles from "./page.module.css";
import Leftnav from './left/leftnav';
import CenterNav from "./middle/CenterNav";
import React from "react";
import UserContextProvider from "./context/UserContextProvider";

export default function Home() {
  return (
    <UserContextProvider>
      <div className={styles.page}>
        <Leftnav />
        <CenterNav />
      </div>
    </UserContextProvider>
  );
}
