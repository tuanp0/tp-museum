'use client'
import footer from '@/data/footer.json'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/Container'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerFirst}>
          <div className={styles.footerDesc}>
            <p className={styles.footerDescTitle}>
              TP <span className={styles.footerDescSubtitle}>Museum</span>
            </p>
            <div className={styles.footerDescText} dangerouslySetInnerHTML={{__html: footer.text}} />
          </div>
          <nav className={styles.footerNav}>
            <ul className={styles.footerUl}>
              <li className={styles.footerLi}><Link href={`/musee`} className={styles.footerLink}>Le musée</Link></li>
              {/* <li className={styles.footerLi}><Link href={`/fujicolor-c200`} className={styles.footerLink}>Fujicolor C200</Link></li>
              <li className={styles.footerLi}><Link href={`/moodymetropolis-500t`} className={styles.footerLink}>Moody Metropolis 500T</Link></li> */}
            </ul>
            <ul className={styles.footerUl}>
              {/* <li className={styles.footerLi}><Link href={`/recipe-comparateur`} className={styles.footerLink}>Comparateur de recipe</Link></li>
              <li className={styles.footerLi}><Link href={`/recipe-installation`} className={styles.footerLink}>Installation de recipe</Link></li>
              <li className={styles.footerLi}><Link href={`/plan-du-site`} className={styles.footerLink}>Plan du site</Link></li> */}
            </ul>
          </nav>
        </div>
        <div className={styles.footerSecond}>
          
        </div>
        <div className={styles.footerThird}>
          <div className={styles.footerCopyright}>© 2025 - TP</div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer