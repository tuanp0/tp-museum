import React, { FC, ReactNode } from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import SliderCards from '@/components/SliderCards'

import styles from "./BgContent.module.scss"

interface BgContentInterface {
  data: {
    title: string
    // image: {
    //   src: string
    //   alt: string
    //   width: number
    //   height: number
    //   author: string
    // },
    // slider: {
    //   src: string
    //   alt: string
    //   width: string
    //   height: string
    //   author: string
    //   title: string
    //   category: string
    //   date: string
    //   link: string
    // }[]
  },
  waves?: boolean
  bg?: string,
  padding?: boolean,
  noContainer?: boolean,
  children?: ReactNode,
}

const BgContent = ({data, bg, waves, padding, noContainer, children}:BgContentInterface) => {
  return (
    <section className={`
      ${styles.bgcontent}
      ${bg === 'blue' && styles.blue}
      ${bg === 'brown' && styles.brown}
      ${bg === 'green' && styles.green}
      ${bg === 'paper' && styles.paper}
      ${padding && styles.padding}
    `}>
      {waves && 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className={styles.bgcontentWaves}>
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
              dur="8s" 
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
              dur="5s" 
              repeatCount="indefinite"
              values="
                M0,280 Q360,240 720,280 T1440,280 L1440,320 L0,320 Z;
                M0,280 Q360,320 720,280 T1440,280 L1440,320 L0,320 Z;
                M0,280 Q360,240 720,280 T1440,280 L1440,320 L0,320 Z
              "
            />
          </path>
        </svg>
      }

      {noContainer ? (
        <>
          <Container className={`${styles.container} ${styles.onlyTitle}`}>
            <div className={styles.bgcontentTitle} dangerouslySetInnerHTML={{__html:data.title}} />
          </Container>
          {children}
        </>
      ) : (
        <Container className={styles.container}>
          <div className={styles.bgcontentTitle} dangerouslySetInnerHTML={{__html:data.title}} />
          {children}
        </Container>
      )}
    </section>
  )
}

export default BgContent