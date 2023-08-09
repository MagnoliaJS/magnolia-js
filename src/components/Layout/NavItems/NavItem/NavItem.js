import Link from 'next/link'

import ExternalLinkIcon from '@/components/UI/icons/ExternalLinkIcon'
import styles from './NavItem.module.css'

const NavItem = (props) => {
  if (props.external) {
    return (
      <li className={styles.listitem}>
        <a
          href={props.link}
          className={styles.link}
          rel="noreferrer"
          target="_blank"
        >
          {props.children}
          <ExternalLinkIcon />
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
