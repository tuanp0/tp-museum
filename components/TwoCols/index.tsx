import React, { ReactNode } from 'react'
import Container from '@/components/Container'

import styles from './TwoCols.module.scss'

interface TwoColsInterface {
  children?: ReactNode,
}

const TwoCols = ({children}:TwoColsInterface) => {
  return (
    <section className={styles.twocols}>
        <Container className={styles.container}>
            {children}
        </Container>
    </section>
  )
}

export default TwoCols