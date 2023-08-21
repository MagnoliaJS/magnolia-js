import Link from "next/link"
import Image from "next/image"

import styles from "./Layout.module.css"
import NavBar from "./NavBar/NavBar"
import MobileNav from "./MobileNav/MobileNav"
import Logo from "../UI/Logo/Logo"
import TwitterIcon from "../UI/icons/TwitterIcon"
import YoutubeIcon from "../UI/icons/YoutubeIcon"
import LinkedInIcon from "../UI/icons/LinkedInIcon"
import TiktokIcon from "../UI/icons/TiktokIcon"
import DiscordIcon from "../UI/icons/DiscordIcon"

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
          href="https://discord.gg/dvPZQhXaxa"
          rel="noreferrer"
          target="_blank"
          className={styles.footerlink}
        >
          <DiscordIcon />
        </a>
        <a
          href="https://www.linkedin.com/company/magnoliajs"
          rel="noreferrer"
          target="_blank"
          className={styles.footerlink}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.tiktok.com/@magnolia.js"
          rel="noreferrer"
          target="_blank"
          className={styles.footerlink}
        >
          <TiktokIcon />
        </a>
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
          <YoutubeIcon />
        </a>
      </div>
      <div>&copy; MagnoliaJS</div>
    </footer>
  </>
)

export default Layout
