import histoireData from '@/data/histoire.json'
import MuseeData from '@/data/musee.json'
import LibrairieData from '@/data/librairie.json'
import CafeData from '@/data/cafe.json'
import SliderCards from '@/components/SliderCards'

import Intro from '@/components/Intro'
import TitleTextVisuel from '@/components/TitleTextVisuel'
import BgContent from '@/components/BgContent'

import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <TitleTextVisuel data={histoireData} />
      <BgContent data={MuseeData} bg={'blue'} waves>
        <SliderCards slider={MuseeData.slider}/>
      </BgContent>
      <BgContent data={LibrairieData} />
      <BgContent data={CafeData} bg={'brown'} waves>
        <SliderCards slider={CafeData.slider}/>
      </BgContent>
    </main>
  )
}
