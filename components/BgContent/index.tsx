import React, { ReactNode } from 'react'
import Image from 'next/image'
import Waves from '@/components/Waves'
import Container from '@/components/Container'
import Title from '@/components/Title'

import styles from "./BgContent.module.scss"

interface BgContentInterface {
  data: {
    title: string,
  },
  waves?: boolean
  bg?: string,
  paddingT?: boolean,
  paddingB?: boolean,
  noContainer?: boolean,
  children?: ReactNode,
}

const BgContent = ({data, bg, waves, paddingT, paddingB, noContainer, children}:BgContentInterface) => {
  return (
    <section className={`
      ${styles.bgcontent}
      ${bg === 'blue' ? styles.blue :
        bg === 'brown' ? styles.brown :
        bg === 'green' ? styles.green :
        bg === 'white50' ? styles.white50 :
        bg === 'black' ? styles.black :
        bg === 'paper' ? styles.paper : ''}
      ${paddingT ? styles.paddingt : ''}
      ${paddingB ? styles.paddingb : ''}
    `}>
      {waves &&  <Waves color={bg}/>}

      {noContainer ? (
        <>
          {children}
        </>
      ) : (
        // <Container className={styles.container}>
          <>{children}</>
        // </Container>
      )}
    </section>
  )
}

export default BgContent