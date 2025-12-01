import React from 'react'
import Container from '@/components/Container'
import styles from './Title.module.scss'

interface TitleInterface {
    title: string;
    color?: string;
}

const index = ({title, color}:TitleInterface) => {
  return (
    <Container className={styles.container}>
        <div
            className={`
                ${styles.title}
                ${color === 'white' && styles.white}
            `}
            dangerouslySetInnerHTML={{__html:title}}
        />
    </Container>
  )
}

export default index