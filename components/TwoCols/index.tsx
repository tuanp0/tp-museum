import React, { ReactNode } from 'react'
import Container from '@/components/Container'
import Waves from '@/components/Waves'

import styles from './TwoCols.module.scss'

interface TwoColsInterface {
  waves?: boolean,
  bg?: string,
  gradient?: boolean,
  children?: ReactNode,
}

const TwoCols = ({waves, bg, gradient, children}:TwoColsInterface) => {
  return (
    <section
      className={`
        ${styles.twocols}
        ${bg === 'black80' ? styles.black80 : ''}
        ${bg === 'white70' ? styles.white70 : ''}
        ${gradient ? styles.gradient : ''}
      `}
    >
      {waves && <Waves color={bg} />}
      <Container className={styles.container}>
          {children}
      </Container>
    </section>
  )
}

export default TwoCols