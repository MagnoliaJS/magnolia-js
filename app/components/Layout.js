import { Image, Link } from "blitz"

import NavItem from "./NavItem/NavItem"

import styles from "./Layout.module.css"

import logo from "public/MagnoliaHorizontalLogo-DarkJS.png"
import blitz from "public/blitzjs-logo.svg"
import twitter from "public/icons/twitter.svg"

const Layout = (props) => (
  <div>
    <nav>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logo} alt="MagnoliaJS logo" placeholder="blur" />
          </a>
        </Link>
      </div>
      <ul className={styles.nav}>
        <NavItem link="/conduct">Conduct</NavItem>
        <NavItem link="/faq">FAQs</NavItem>
        <NavItem link="/sponsors">Sponsors</NavItem>
      </ul>
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
          <Image src={twitter} alt="link to Twitter account." height="16" width="16" />
        </a>
      </div>
      <div>
        <a
          href="https://blitzjs.com"
          rel="noreferrer"
          target="_blank"
          className={styles.footerlink}
        >
          Powered by{" "}
          <Image src={blitz} alt="BlitzJS. link to BlitzJS site." height="16" width="42" />
        </a>
      </div>
      <div>&copy; MagnoliaJS</div>
    </footer>
  </div>
)

export default Layout
