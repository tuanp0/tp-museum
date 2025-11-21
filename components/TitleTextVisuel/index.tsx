
import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'

import styles from './TitleTextVisuel.module.scss'

interface TitleTextVisuelInterface {
  data: {
    title?: string,
    text?: string
    image: {
      src: string,
      alt: string
      width: number,
      height: number,
      author: string
    }
  }
}

const TitleTextVisuel = ({data}: TitleTextVisuelInterface) => {
  return (
    <section className={styles.musee}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className={styles.museeWaves}>
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#f5f5f0", stopOpacity: 1}} />
            <stop offset="100%" style={{ stopColor: "#e8e8dc", stopOpacity: 1}} />
          </linearGradient>
        </defs>
        
        <path fill="url(#waveGradient)" fillOpacity="0.4">
          <animate 
            attributeName="d" 
            dur="12s" 
            repeatCount="indefinite"
            values="
              M0,160 Q360,80 720,160 T1440,160 L1440,320 L0,320 Z;
              M0,160 Q360,240 720,160 T1440,160 L1440,320 L0,320 Z;
              M0,160 Q360,80 720,160 T1440,160 L1440,320 L0,320 Z
            "
          />
        </path>
        
        <path fill="rgba(232, 227, 214, 1)" fillOpacity="0.7">
          <animate 
            attributeName="d" 
            dur="9s" 
            repeatCount="indefinite"
            values="
              M0,192 Q360,112 720,192 T1440,192 L1440,320 L0,320 Z;
              M0,192 Q360,272 720,192 T1440,192 L1440,320 L0,320 Z;
              M0,192 Q360,112 720,192 T1440,192 L1440,320 L0,320 Z
            "
          />
        </path>
        
        <path fill="rgba(232, 227, 214, 1)" fillOpacity="1">
          <animate 
            attributeName="d" 
            dur="6s" 
            repeatCount="indefinite"
            values="
              M0,280 Q360,240 720,280 T1440,280 L1440,320 L0,320 Z;
              M0,280 Q360,320 720,280 T1440,280 L1440,320 L0,320 Z;
              M0,280 Q360,240 720,280 T1440,280 L1440,320 L0,320 Z
            "
          />
        </path>
      </svg>
      
      <Container>
          <div className={styles.museeContainer}>
            <div className={styles.museeContent}>
              <div className={styles.museeTitle} dangerouslySetInnerHTML={{__html:data.title || ''}} />
              <div className={styles.museeText} dangerouslySetInnerHTML={{__html:data.text || ''}} />
            </div>
            <div className={styles.museeVisuel}>
              <Image src={data.image.src} alt={data.image.alt} width={data.image.width} height={data.image.height} className={styles.museeImg} />
              <span className={`author right`}>{data.image.author}</span>
            </div>
          </div>
      </Container>
    </section>
  )
}

export default TitleTextVisuel