import MuseeData from '@/data/musee.json'
import LibrairieData from '@/data/librairie.json'
import temoignagesData from '@/data/temoignages.json'
import { TemoignagesInterface } from '@/types/temoignages'

import Intro from '@/components/Intro'

import Event from '@/components/Event'
import BgContent from '@/components/BgContent'
import SliderCards from '@/components/SliderCards'
import Masonry from '@/components/Masonry'
import SliderGallery from "@/components/SliderGallery"

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
      <BgContent data={dataTemoignages} bg={`brown`} waves noContainer padding>
        <SliderGallery data={dataTemoignages.temoignages} />
        <SliderGallery data={dataTemoignages.temoignages} reverse page={2} />
        {/* <SliderGallery data={dataTemoignages.temoignages} /> */}
      </BgContent>
    </main>
  )
}
