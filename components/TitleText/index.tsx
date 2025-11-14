
import React from 'react'
import Container from '@/components/Container'

import styles from './TitleText.module.scss'

interface TitleTextInterface {
  title?: string,
  text?: string
}


const TitleText = ({title, text}: TitleTextInterface) => {
  return (
    <section className={styles.musee}>
        <Container>
            <div className={styles.museeContent}>
              <div className={styles.museeTitle} dangerouslySetInnerHTML={{__html:title || ''}} />
              <div className={styles.museeText} dangerouslySetInnerHTML={{__html:text || ''}} />
            </div>
        </Container>
    </section>
  )
}

export default TitleText