import MuseeData from '@/data/musee.json'
import LibrairieData from '@/data/librairie.json'
import CafeData from '@/data/cafe.json'
import temoignagesData from '@/data/temoignages.json'
import { TemoignagesInterface } from '@/types/temoignages'

import Intro from '@/components/Intro'

import Event from '@/components/Event'
import BgContent from '@/components/BgContent'
import SliderCards from '@/components/SliderCards'
import Masonry from '@/components/Masonry'
import SliderGallery from "@/components/SliderGallery"
import ImageDragDrop from '@/components/ImageDragDrop'

import styles from "./page.module.css"

export default function Home() {
  const dataTemoignages = temoignagesData as TemoignagesInterface;

  return (
    <main className={`main`}>
      <Intro />
      <Event />
      <BgContent data={MuseeData} bg={'blue'} waves>
        <SliderCards slider={MuseeData.slider}/>
      </BgContent>
      <BgContent data={LibrairieData} bg={`paper`} padding>
        <Masonry images={LibrairieData.images} />
      </BgContent>
      <BgContent data={CafeData} waves noContainer padding>
        <SliderGallery data={dataTemoignages.temoignages} />
        <SliderGallery data={dataTemoignages.temoignages} reverse />
        {/* <SliderGallery data={dataTemoignages.temoignages} /> */}
      </BgContent>
    </main>
  )
}
