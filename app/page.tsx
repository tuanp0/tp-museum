import MuseeData from '@/data/musee.json'
import EventData from '@/data/event.json'
import LibrairieData from '@/data/librairie.json'
import temoignagesData from '@/data/temoignages.json'
import { TemoignagesInterface } from '@/types/temoignages'

import Intro from '@/components/Intro'

import Event from '@/components/Event'
import BgContent from '@/components/BgContent'
import Elevator from '@/components/Elevator'
import Title from '@/components/Title'
import SliderCards from '@/components/SliderCards'
import BgImage from '@/components/BgImage'
import Masonry from '@/components/Masonry'
import SliderGallery from '@/components/SliderGallery'

export default function Home() {
  const dataTemoignages = temoignagesData as TemoignagesInterface;

  return (
    <main className={`main`}>
      <Intro />
      <Event />
      <BgImage data={EventData.images}/>
      <BgContent data={MuseeData} bg={'blue'} waves>
        <Elevator text1={'RDC'} text2={'1er'} color={'white'} />
        <Title title={MuseeData.title} color={'white'} />
        <SliderCards slider={MuseeData.slider} />
        <BgImage data={MuseeData.images}/>
      </BgContent>
      <BgContent data={LibrairieData} bg={`paper`} padding>
        <Elevator text1={'2ème'} text2={'étage'} />
        <Title title={LibrairieData.title} />
        <Masonry images={LibrairieData.images} />
      </BgContent>
      <BgContent data={dataTemoignages} bg={`brown`} waves noContainer padding>
        <Elevator text1={'3ème'} text2={'étage'} color={'white'} />
        <Title title={dataTemoignages.title} color={'white'} />
        <SliderGallery data={dataTemoignages.temoignages} />
        <SliderGallery data={dataTemoignages.temoignages} reverse page={2} />
      </BgContent>
    </main>
  )
}
