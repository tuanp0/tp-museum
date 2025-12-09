import React, { ReactNode } from 'react'
import Container from '@/components/Container'
import Waves from '@/components/Waves'

import styles from './TwoCols.module.scss'

interface TwoColsInterface {
  waves?: boolean,
  bg?: string,
  children?: ReactNode,
}

const TwoCols = ({waves, bg, children}:TwoColsInterface) => {
  return (
    <section className={styles.twocols}>
      {waves && <Waves color={bg} />}
        <Container className={styles.container}>
            {children}
        </Container>
    </section>
  )
}

export default TwoCols