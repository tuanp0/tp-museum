import React from 'react'
import Container from '@/components/Container'

import styles from './Paragraph.module.scss'

interface ParagraphInterface {
    paragraph?: string,
}

const Paragraph = ({paragraph}:ParagraphInterface) => {
  return (
    <div className={styles.paragraph}>
        <Container className={styles.container}>
            <div className={styles.paragraphInner} dangerouslySetInnerHTML={{__html:paragraph ?? ''}}/>
        </Container>
    </div>
  )
}

export default Paragraph