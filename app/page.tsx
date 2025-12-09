import IntroData from '@/data/intro.json'
import MuseeData from '@/data/musee.json'
import EventData from '@/data/event.json'
import LibrairieData from '@/data/librairie.json'
import temoignagesData from '@/data/temoignages.json'
import { TemoignagesInterface } from '@/types/temoignages'

import Intro from '@/components/Intro'
import TwoCols from '@/components/TwoCols'
import OuvertureTarif from '@/components/OuvertureTarif'
import Event from '@/components/Event'
import BgContent from '@/components/BgContent'
import Elevator from '@/components/Elevator'
import Title from '@/components/Title'
import Paragraph from '@/components/Paragraph'
import SliderCards from '@/components/SliderCards'
import BgImage from '@/components/BgImage'
import Masonry from '@/components/Masonry'
import SliderGallery from '@/components/SliderGallery'

export default function Home() {
  const dataTemoignages = temoignagesData as TemoignagesInterface;

  return (
    <main className={`main`}>
      <Intro />
      <TwoCols waves bg={'white70'}>
        <OuvertureTarif />
        <Event />
      </TwoCols>
      <BgImage data={EventData.images}/>
      <BgContent data={MuseeData} bg={'black'} waves>
        <Elevator text1={'RDC'} text2={'1er'} color={'white'} />
        <Title title={MuseeData.title} color={'white'} />
        <Paragraph paragraph={MuseeData.text} />
        <SliderCards slider={MuseeData.slider} />
      </BgContent>
      <BgContent data={LibrairieData} bg={`paper`} padding>
        <BgImage data={MuseeData.images}/>
        <Elevator text1={'2ème'} text2={'étage'} />
        <Title title={LibrairieData.title} />
        <Masonry images={LibrairieData.images} />
      </BgContent>
      <BgContent data={dataTemoignages} waves noContainer padding>
        <Elevator text1={'3ème'} text2={'étage'} />
        <Title title={dataTemoignages.title} />
        <SliderGallery data={dataTemoignages.temoignages} />
        <SliderGallery data={dataTemoignages.temoignages} reverse page={2} />
        <SliderGallery data={dataTemoignages.temoignages} />
      </BgContent>
    </main>
  )
}
