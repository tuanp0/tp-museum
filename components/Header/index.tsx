'use client'
import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'

import styles from './Header.module.scss'

const Header = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const toggleMenuMobile = () => {
    setIsMenuOpened(!isMenuOpened)
  }

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }


  }, [])

  return (
    <header className={`${styles.header} ${isScrolled && styles.scrolled}`}>
        <Container className={styles.container} noPadding>
          <Link href={`/`}>
            {isHome ? (
              <h1 className={styles.headerTitle}>
                <Image src={`./tp-museum.svg`} alt={`TP Museum | Musée - Librairie - Café`} width={280} height={78} className={styles.headerLogo} />
                <span className={styles.headerSpan}>Tp Museum</span>
              </h1>
            ) : (
              <p className={styles.headerTitle}>
                <Image src={`./tp-museum.svg`} alt={`TP Museum | Musée - Librairie - Café`} width={280} height={78} className={styles.headerLogo} />
                <span className={styles.headerSpan}>Tp Museum</span>
              </p>
            )}
          </Link>
          <button className={`${styles.headerBurger} ${isMenuOpened && styles.opened}`} onClick={() => {toggleMenuMobile()}}>
              <span className={styles.headerBurgerIcon1}></span>
              <span className={styles.headerBurgerIcon2}></span>
              <span className={styles.headerBurgerIcon3}></span>
          </button>
          <div className={`${styles.headerLinks} ${isMenuOpened && styles.opened}`}>
            <div className={styles.headerLinksContent}>
              <div className={styles.headerRs}>
                <Link href={`#`} title={`X Twitter`} className={styles.headerRsItem}>
                  <Image src={`/x.svg`} alt={`X Twitter`} width={280} height={78} className={styles.headerRsX} />
                </Link>
                <Link href={`#`} title={`Instagram`} className={styles.headerRsItem}>
                  <Image src={`/ig.svg`} alt={`Instagram`} width={280} height={78} className={styles.headerRsIg} />
                </Link>
                <Link href={`#`} title={`Facebook`} className={styles.headerRsItem}>
                  <Image src={`/fb.svg`} alt={`Facebook`} width={280} height={78} className={styles.headerRsFb} />
                </Link>
                <Link href={`#`} title={`YouTube`} className={styles.headerRsItem}>
                  <Image src={`/yt.svg`} alt={`YouTube`} width={280} height={78} className={styles.headerRsYt} />
                </Link>
              </div>
              <nav className={styles.headerMenu}>
                <ul className={styles.headerMenuUl}>
                  <li className={styles.headerMenuLi}><Link href={`musee`} title={``} className={styles.headerMenuLink}>Le Musée</Link></li>
                  <li className={styles.headerMenuLi}><Link href={`#`} title={``} className={styles.headerMenuLink}>La Librarie</Link></li>
                  <li className={styles.headerMenuLi}><Link href={`#`} title={``} className={styles.headerMenuLink}>Le Café</Link></li>
                  <li className={styles.headerMenuLi}><Link href={`#`} title={``} className={styles.headerMenuLink}>Accès</Link></li>
                  <li className={styles.headerMenuLi}><Link href={`#`} title={``} className={styles.headerMenuLink}>Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </Container>
    </header>
  )
}

export default Header