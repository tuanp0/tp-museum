import React from 'react'
import Container from '@/components/Container'
import styles from './Intro.module.scss'

const Intro = () => {
  return (
    <section className={styles.intro}>
        <Container className={styles.container}>
          <h2 className={styles.introTitle}>Bienvenue !</h2>
          {/* <svg className={styles.introTitle} width="560" height="120" viewBox="0 0 560 120">
            <defs>
              <path id="textPath" d="M10 130 C190 60 370 60 550 130"/>
            </defs>
            <text fill="black">
              <textPath href="#textPath" startOffset="50%" textAnchor="middle">Bienvenue !</textPath>
            </text>
          </svg> */}

          <p className={styles.introSubtitle}>
            <span className={styles.introSpan}>Musée - Librairie - Café</span><br/>
            Ville de Tuan, la capitale fictive
          </p>
        </Container>
    </section>
  )
}

export default Intro