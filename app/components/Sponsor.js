import { Image } from "blitz"

import styles from "./Sponsor.module.css"

const Sponsor = (props) => {
  return (
    <a href={props.link} className={styles.sponsor}>
      {props.logo ? (
        <Image
          src={props.logo}
          alt={`${props.name}'s logo`}
          layout="intrinsic"
          height="100%"
          width="100%"
        />
      ) : null}
      <h2 className={styles.name}>{props.name}</h2>
    </a>
  )
}

export default Sponsor
