import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import SliderCards from '@/components/SliderCards'

import styles from "./BgContent.module.scss"

interface BgContentInterface {
  data: {
    title: string
    image: {
      src: string
      alt: string
      width: number
      height: number
      author: string
    },
    slider: {
      src: string
      alt: string
      width: string
      height: string
      author: string
      title: string
      category: string
      date: string
      link: string
    }[]
  },
  bg?: string,
}

const BgContent = ({data, bg}:BgContentInterface) => {
  return (
    <section className={`
      ${styles.bgcontent}
      ${bg === 'blue' && styles.blue}
      ${bg === 'brown' && styles.brown}
      ${bg === 'green' && styles.green}
    `}>
      <Container>
        <div className={styles.bgcontentTitle} dangerouslySetInnerHTML={{__html:data.title}} />
        <SliderCards slider={data.slider}/>
        {/* <Image src={data.image.src} alt={data.image.alt} width={data.image.width} height={data.image.height} className={styles.bgcontentBg}/>
        <span className={`author`}>{data.image.author}</span> */}
      </Container>
    </section>
  )
}

export default BgContent