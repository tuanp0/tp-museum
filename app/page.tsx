import histoireData from '@/data/histoire.json'
import MuseeData from '@/data/musee.json'
import LibrairieData from '@/data/librairie.json'
import CafeData from '@/data/cafe.json'

import Intro from '@/components/Intro'
import TitleTextVisuel from '@/components/TitleTextVisuel'
import Event from '@/components/Event'
import BgContent from '@/components/BgContent'
import SliderCards from '@/components/SliderCards'
import Masonry from '@/components/Masonry'
import ImageDragDrop from '@/components/ImageDragDrop'

import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <TitleTextVisuel data={histoireData} />
      <Event />
      <BgContent data={MuseeData} bg={'blue'} waves>
        <SliderCards slider={MuseeData.slider}/>
      </BgContent>
      <BgContent data={LibrairieData} bg={`paper`} padding>
        <Masonry images={LibrairieData.images} />
      </BgContent>
      <BgContent data={CafeData} bg={'brown'} waves noContainer>
        {/* <SliderCards slider={CafeData.slider}/> */}
        <ImageDragDrop />
      </BgContent>
    </main>
  )
}
