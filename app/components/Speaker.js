import { Image } from "blitz"

import styles from "./Speaker.module.css"

const Speaker = (props) => {
  return (
    <div>
      {props.headshot ? (
        <Image
          src={props.info.headshot}
          alt={`${props.info.name}'s headshot.`}
          layout="intrinsic"
          height="100%"
          width="100%"
        />
      ) : null}
      <h2 className={styles.name}>{props.info.name}</h2>
      <p>{props.info.bio}</p>
    </div>
  )
}

export default Speaker
