import introData from '@/data/intro.json'
import { IntroInterface } from '@/types/intro'
import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'

import styles from './Intro.module.scss'

const Intro = () => {
  const data: IntroInterface = introData
  const today = new Date()
  const dayName = today.toLocaleDateString('fr-FR')

  return (
    <section className={styles.intro}>
        <Container className={styles.container}>
          {/* <h2 className={styles.introTitle}>{data.title}</h2> */}
          <svg className={styles.introTitle} width="450" height="120" viewBox="0 0 450 120">
            <defs>
              <path id="textPath" d="M10 130 C150 60 300 60 450 130"/>
            </defs>
            <text fill="black">
              <textPath href="#textPath" startOffset="50%" textAnchor="middle">{data.title}</textPath>
            </text>
          </svg>

          <p className={styles.introSubtitle}>
            <span className={styles.introSpan}>{data.subtitle.span}</span><br/>
            {data.subtitle.text}
          </p>
        </Container>
        <div className={styles.introMuseum}>
          <Image src={data.image.src} alt={data.image.alt} width={833} height={600} className={styles.introMuseumImg} />
          <span className={`author ${styles.introMuseumAuthor}`}>{data.image.author}</span>
        </div>

        <div className={styles.introNews}>
          <div className={styles.introNewsContent}>
            <span className={styles.introNewsDate}>{dayName}</span>
            <p className={styles.introNewsText}>{data.news.openText.replace('{time}', '9:00 à 19:00')}</p>
          </div>
        </div>

    </section>
  )
}

export default Intro