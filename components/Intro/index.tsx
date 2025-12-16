import introData from '@/data/intro.json'
import ouvertureTarifData from '@/data/ouverturetarif.json'
import { IntroInterface } from '@/types/intro'
import { OuvertureTarifInterface } from '@/types/ouverturetarif'
import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'

import styles from './Intro.module.scss'

const Intro = () => {
  const data: IntroInterface = introData
  const dataOuverture: OuvertureTarifInterface = ouvertureTarifData
  const today = new Date()
  const dayDate = today.toLocaleDateString('fr-FR')
  const dayName = today.toLocaleDateString('fr-FR', { weekday: 'long' })

  const dayNameCapitalize = dayName.charAt(0).toUpperCase() + dayName.slice(1)
  const hoursToday = ouvertureTarifData.ouverture.find(item => item.key === dayNameCapitalize) || { key: '', value: 'Horaires non disponibles' }
  const statusToday = hoursToday.value === 'Fermé' ? 'fermé' : 'ouvert'
  
  return (
    <section className={styles.intro}>
      <div className={styles.bgvideo}>
        <video
            className={styles.bgvideoIframe}
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={data.video.url} type="video/webm" />
            Your browser does not support the video tag.
        </video>
        <span className={`author`}>{data.video.author}</span>
      </div>

      <Container className={styles.container}>
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

      <div className={styles.introNews}>
        <div className={styles.introNewsContent}>
          <span className={styles.introNewsDate}>{dayDate}</span>
          <p className={styles.introNewsText}>
            {
              statusToday === "fermé" ? (
                data.news.openText
                  .replace('{status}', statusToday)
                  .replace(' de {time}', '. Il sera ouvert demain de 9:00 à 19:00')
              ) : (
                data.news.openText
                  .replace('{status}', statusToday)
                  .replace('{time}', hoursToday.value)
                  .replace('-', 'à')
              )
            }
          </p>
        </div>
      </div>

    </section>
  )
}

export default Intro