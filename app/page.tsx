import histoireData from '@/data/histoire.json'
import MuseeData from '@/data/musee.json'

import Intro from '@/components/Intro'
import TitleText from '@/components/TitleText'
import BgContent from '@/components/BgContent'

import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <TitleText title={histoireData.title} text={histoireData.text} />
      <BgContent data={MuseeData} />
    </main>
  );
}
