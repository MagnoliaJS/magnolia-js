import { Image } from "blitz"

import styles from "./Speaker.module.css"

const Speaker = (props) => {
  return (
    <div className={styles.speaker}>
      {props.photo ? (
        <Image
          src={props.photo}
          alt={`${props.name}'s headshot.`}
          objectFit="cover"
          height="100%"
          width="100%"
        />
      ) : null}
      <div className={styles.info}>
        <div className={styles.basic}>
          <h2 className={styles.name}>{props.name}</h2>
          <span>{props.pronouns}</span>
        </div>
        <a href={`https://twitter.com/${props.twitter}`} rel="noreferrer" target="_blank">
          @{props.twitter}
        </a>
        <p>
          {props.bio ? props.bio : `Come hear ${props.name.split(" ").at(0)} at MagnoliaJS 2022!`}
        </p>
      </div>
    </div>
  )
}

export default Speaker
