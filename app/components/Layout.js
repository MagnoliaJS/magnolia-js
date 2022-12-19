import { Image, Link } from "blitz"

import NavItem from "./NavItem/NavItem"

import styles from "./Layout.module.css"

import logo from "public/whiteSpookyLogo.svg"
import blitz from "public/blitzjs-logo.svg"
import twitter from "public/icons/twitter.svg"

const Layout = (props) => (
  <>
    <nav>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logo} alt="MagnoliaJS logo" />
          </a>
        </Link>
      </div>
      <ul className={styles.nav}>
        <NavItem link="https://sessionize.com/magnoliajs-2023/" external>
          Call for Speakers
        </NavItem>
        <NavItem link="/conduct">Conduct</NavItem>
        <NavItem link="/covid">COVID-19 Policy</NavItem>
        <NavItem link="/faq">FAQs</NavItem>
        {/* <NavItem link="/schedule">Schedule</NavItem> */}
        {/* <NavItem link="/speakers">Speakers</NavItem> */}
        <NavItem link="/sponsors">Sponsors</NavItem>
        <NavItem link="https://www.eventbrite.com/e/magnoliajs-2023-tickets-422921328077" external>
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
  </>
)

export default Layout
