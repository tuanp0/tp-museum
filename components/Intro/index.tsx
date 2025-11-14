import introData from '@/data/intro.json'
import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'

import styles from './Intro.module.scss'

const Intro = () => {
  const today = new Date();
  const dayName = today.toLocaleDateString('fr-FR');

  return (
    <section className={styles.intro}>
        <Container className={styles.container}>
          <h2 className={styles.introTitle}>{introData.title}</h2>
          {/* <svg className={styles.introTitle} width="560" height="120" viewBox="0 0 560 120">
            <defs>
              <path id="textPath" d="M10 130 C190 60 370 60 550 130"/>
            </defs>
            <text fill="black">
              <textPath href="#textPath" startOffset="50%" textAnchor="middle">{introData.title}</textPath>
            </text>
          </svg> */}

          <p className={styles.introSubtitle}>
            <span className={styles.introSpan}>{introData.subtitle.span}</span><br/>
            {introData.subtitle.text}
          </p>
        </Container>
        <div className={styles.introMuseum}>
          <Image src={introData.image.src} alt={introData.image.alt} width={833} height={600} className={styles.introMuseumImg} />
          <span className={`author ${styles.introMuseumAuthor}`}>{introData.image.author}</span>
        </div>
        <div className={styles.introNews}>
          <div className={styles.introNewsContent}>
            <span className={styles.introNewsDate}>{dayName}</span>
            <p className={styles.introNewsText}>{introData.news.openText.replace('{time}', '9:00 à 19:00')}</p>
          </div>
        </div>
    </section>
  )
}

export default Intro