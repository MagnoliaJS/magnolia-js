import { Link } from "blitz"

import styles from "./NavItem.module.css"

const NavItem = (props) => (
  <li className={styles.listitem}>
    <Link href={props.link}>
      <a className={styles.link}>{props.children}</a>
    </Link>
  </li>
)

export default NavItem
