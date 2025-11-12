import Image from "next/image";
import Intro from '@/components/Intro'

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
    </main>
  );
}
