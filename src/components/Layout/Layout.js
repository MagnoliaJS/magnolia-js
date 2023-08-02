import Link from "next/link"
import Image from "next/image"

import NavItem from "./NavItem/NavItem"

import styles from "./Layout.module.css"

import logo from "public/whiteSpookyLogo.svg"
import twitter from "public/icons/twitter.svg"

const Layout = (props) => (
  <>
    <nav>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="MagnoliaJS logo" />
        </Link>
      </div>
      <ul className={styles.nav}>
        <NavItem link="/conduct">Conduct</NavItem>
        <NavItem link="/covid">COVID-19 Policy</NavItem>
        <NavItem link="/faq">FAQs</NavItem>
        <NavItem link="/schedule">Schedule</NavItem>
        <NavItem link="/speakers">Speakers</NavItem>
        <NavItem link="/sponsors">Sponsors</NavItem>
        <NavItem link="/tickets" external>
          Tickets
        </NavItem>
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
      <div>&copy; MagnoliaJS</div>
    </footer>
  </>
)

export default Layout
