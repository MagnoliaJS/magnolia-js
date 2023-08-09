import Link from 'next/link'

import styles from './Layout.module.css'
import NavBar from './NavBar/NavBar'
import MobileNav from './MobileNav/MobileNav'
import Logo from '../UI/Logo/Logo'
import TwitterIcon from '../UI/icons/TwitterIcon'
import YouTubeIcon from '../UI/icons/YouTubeIcon'

const Layout = (props) => (
  <>
    <nav>
      <div className={styles.logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <NavBar />
      <MobileNav />
    </nav>
    <main className={styles.main}>{props.children}</main>
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://twitter.com/magnoliajsconf"
          rel="noreferrer"
          target="_blank"
          className={styles.footerlink}
        >
          <TwitterIcon />
        </a>
        <a
          href="https://youtube.com/@magnoliajs"
          rel="noreferrer"
          target="_blank"
          className={styles.footerlink}
        >
          <YouTubeIcon />
        </a>
      </div>
      <div>&copy; MagnoliaJS</div>
    </footer>
  </>
)

export default Layout
