import Image from 'next/image'
import styles from './page.module.css'

import { StrictMode } from "react";
import MyPopupWidget from "./MyPopupWidget";


export default function Home() {

  return (
    <main className={styles.main}>
        <MyPopupWidget />
    </main>
  )
}
