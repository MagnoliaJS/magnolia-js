import styles from "./Backdrop.module.css"

const backdrop = (props) =>
  props.show ? (
    <div className={styles.backdrop} onClick={props.clicked}></div>
  ) : null

export default backdrop
