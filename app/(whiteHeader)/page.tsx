import IntroData from '@/data/intro.json'
import MuseeData from '@/data/musee.json'
import EventData from '@/data/event.json'
import LibrairieData from '@/data/librairie.json'
import temoignagesData from '@/data/temoignages.json'
import { TemoignagesInterface } from '@/types/temoignages'

import Header from '@/components/Header'
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
import BgVideo from '@/components/BgVideo'
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
      <BgContent data={MuseeData} bg={'white'} waves>
        <Elevator text1={'Rez de'} text2={'chausée'} color={'black'} />
        <Title title={MuseeData.title} color={'black'} />
        <Paragraph paragraph={MuseeData.text} color={'black'}/>
        <SliderCards slider={MuseeData.slider} />
      </BgContent>
      <BgContent data={MuseeData} bg={'black'} waves>
        <Elevator text1={'1er'} text2={'etage'} color={'white'} />
        <Paragraph paragraph={MuseeData.text2} color={'white'} paddingT />
        <BgVideo data={MuseeData.video}/>
      </BgContent>
      <BgContent data={LibrairieData} bg={`paper`} paddingB>
        <Elevator text1={'2ème'} text2={'étage'} />
        <Title title={LibrairieData.title} />
        <Paragraph paragraph={LibrairieData.text} />
        <Masonry images={LibrairieData.images} />
      </BgContent>
      <BgContent data={dataTemoignages} bg={'brown'} waves noContainer paddingB>
        <Elevator text1={'3ème'} text2={'étage'} color={'white'} />
        <Title title={dataTemoignages.title} color={'white'} />
        <SliderGallery data={dataTemoignages.temoignages} />
        <SliderGallery data={dataTemoignages.temoignages} reverse page={2} />
      </BgContent>
    </main>
  )
}
