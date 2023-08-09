import Image from 'next/image'
import Link from 'next/link'
import styles from './Speaker.module.css'
import twitter from 'public/icons/twitter.svg'

const Speaker = (props) => {
  console.log(props)
  return (
    <Link href={`/speakers/${props.slug.current}`} className={styles.speaker}>
      {props.photo ? (
        <Image
          src={props.photo.image}
          alt={`${props.name}'s headshot.`}
          loading="lazy"
          layout="intrinsic"
          height="500"
          width="500"
        />
      ) : null}
      <div className={styles.info}>
        <div className={styles.basic}>
          <h2 className={styles.name}>
            {props.name}{' '}
            <span className={styles.pronouns}>({props.pronouns})</span>
          </h2>
          <span className={styles.title}>{props.title}</span>
        </div>
        {props.twitter ? (
          <a
            href={`https://twitter.com/${props.twitter}`}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src={twitter}
              alt={`link to ${props.name}'s Twitter account.`}
              height="16"
              width="16"
            />{' '}
            @{props.twitter}
          </a>
        ) : null}
      </div>
    </Link>
  )
}

export default Speaker
