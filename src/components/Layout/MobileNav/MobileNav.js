import { useEffect, useState } from "react"
import Link from "next/link"
import Logo from "../../UI/Logo/Logo"
import MenuOpenIcon from "../../UI/icons/MenuOpenIcon"
import MenuCloseIcon from "../../UI/icons/MenuCloseIcon"

import Backdrop from "./Backdrop/Backdrop"
import NavItems from "../NavItems/NavItems"
import styles from "./MobileNav.module.css"

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    setIsMounted(true)
  }, [menuOpen])

  return (
    <>
      <Backdrop clicked={() => setMenuOpen(false)} show={menuOpen} />
      <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <MenuCloseIcon /> : <MenuOpenIcon />}
      </button>
      {/* TODO: fix this... it's gross. */}
      <div className={`${styles.backdrop} ${menuOpen ? styles.open : isMounted ? styles.closeAnimation : styles.close}`}>
        <ul className={styles.mobileNav}>
          <li>
            <Link href="/">
              <Logo />
            </Link>
          </li>
          <NavItems />
        </ul>
      </div>

    </>
  )
}

export default MobileNav