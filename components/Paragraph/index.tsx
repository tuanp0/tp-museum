import React from 'react'
import Container from '@/components/Container'

import styles from './Paragraph.module.scss'

interface ParagraphInterface {
    paragraph?: string,
    color?: string,
    paddingT?: boolean,
}

const Paragraph = ({paragraph, color, paddingT}:ParagraphInterface) => {
  return (
    <div
      className={`
        ${styles.paragraph}
        ${color === 'white' ? styles.white : ''}
        ${paddingT? styles.paddingt : ''}
      `}>
        <Container className={styles.container}>
            <div className={styles.paragraphInner} dangerouslySetInnerHTML={{__html:paragraph ?? ''}}/>
        </Container>
    </div>
  )
}

export default Paragraph