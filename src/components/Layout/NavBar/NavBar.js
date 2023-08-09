import NavItems from "../NavItems/NavItems"
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <ul className={styles.navbar}>
      <NavItems />
    </ul>
  )
}

export default NavBar
