import React from 'react'
import Container from '@/components/Container'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <Container noPadding>
          Header
        </Container>
    </header>
  )
}

export default Header