import Image from "next/image"

import styles from "./Sponsor.module.css"

const Sponsor = (props) => {
  return (
    <a href={props.link} className={styles.sponsor} rel="noreferrer" target="_blank">
      {props.logo ? (
        <Image
          src={props.logo.image}
          alt={`${props.name}'s logo`}
          layout="intrinsic"
          height="250"
          width="250"
        />
      ) : null}
    </a>
  )
}

export default Sponsor
