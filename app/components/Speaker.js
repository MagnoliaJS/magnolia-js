import { Image } from "blitz"

import styles from "./Speaker.module.css"

const Speaker = (props) => {
  return (
    <div className={styles.speaker}>
      {props.photo ? (
        <Image src={props.photo} alt={props.name} objectFit="cover" height="100%" width="100%" />
      ) : null}
      <div className={styles.info}>
        <h2 className={styles.name}>{props.name}</h2>
        <a
          href={`https://twitter.com/${props.twitter.substring(1)}`}
          rel="noreferrer"
          target="_blank"
        >
          {props.twitter}
        </a>
        <p>{props.title ? props.title : "Talk info coming soon!"}</p>
      </div>
    </div>
  )
}

export default Speaker
