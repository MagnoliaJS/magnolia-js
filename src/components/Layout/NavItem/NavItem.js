import Link from "next/link"
import Image from "next/image"

import externalLink from "public/icons/external-link.svg"
import styles from "./NavItem.module.css"

const NavItem = (props) => {
  if (props.external) {
    return (
      <li className={styles.listitem}>
        <a href={props.link} className={styles.link} rel="noreferrer" target="_blank">
          {props.children}
          <Image src={externalLink} alt="Leads to external page." height="16" width="16" />
        </a>
      </li>
    )
  }

  return (
    <li className={styles.listitem}>
      <Link href={props.link} className={styles.link}>
        {props.children}
      </Link>
    </li>
  )
}

export default NavItem
