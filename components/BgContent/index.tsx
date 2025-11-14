import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'

import styles from "./BgContent.module.scss"

interface BgContentInterface {
  data: {
    title: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
      author: string;
    };
  };
}

const BgContent = ({data}:BgContentInterface) => {
  return (
    <section className={styles.bgcontent}>
        <Image src={data.image.src} alt={data.image.alt} width={data.image.width} height={data.image.height} className={styles.bgcontentBg}/>
        <span className={`author`}>{data.image.author}</span>
        <Container>
          <div className={styles.bgcontentTitle} dangerouslySetInnerHTML={{__html:data.title}} />
        </Container>
    </section>
  )
}

export default BgContent