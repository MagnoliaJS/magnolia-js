import Link from "next/link"
import Image from "next/image"

import styles from "./Layout.module.css"
import NavBar from "./NavBar/NavBar"
import MobileNav from "./MobileNav/MobileNav"
import Logo from "../UI/Logo/Logo"
import TwitterIcon from "../UI/icons/TwitterIcon"

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
      <div>
        <a
          href="https://twitter.com/magnoliajsconf"
          rel="noreferrer"
          target="_blank"
          className={styles.footerlink}
        >
          <TwitterIcon />
        </a>
      </div>
      <div>&copy; MagnoliaJS</div>
    </footer>
  </>
)

export default Layout
