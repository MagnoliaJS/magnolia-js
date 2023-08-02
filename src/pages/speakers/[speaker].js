import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import Layout from "@/components/Layout/Layout"
import { getSpeaker } from "@/sanity/sanity.query"
import { useEffect, useState } from "react"
import { PortableText } from "@portabletext/react"
import styles from "./SpeakerPage.module.css"

const SpeakerPage = () => {
  const router = useRouter()
  const [speaker, setSpeaker] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (!router.query.speaker) return
    const fetchSpeaker = async () => {
      const [speaker] = await getSpeaker(router.query.speaker)
      setSpeaker(speaker)
    }

    fetchSpeaker()
    setLoading(false)
  }, [router.query.speaker])

  return (
    <Layout>
      <div className="center-text">
        <Head>
          <title>{speaker && `${speaker.name} | `}Speakers | MagnoliaJS</title>
        </Head>
        {!speaker ? <h1>Loading...</h1> : (
          <>
            <div className={styles.heading}>
              <h1 className={styles.name}>{speaker.name}</h1>
              <span className={styles.pronouns}>({speaker.pronouns})</span>
            </div>

            <Image
              src={speaker.photo.image}
              alt={`${speaker.name}'s headshot.`}
              loading="lazy"
              layout="intrinsic"
              height="500"
              width="500"
            />
            <p>{speaker.title}</p>
            {speaker.twitter ? (
              <a href={`https://twitter.com/${speaker.twitter}`} rel="noreferrer" target="_blank">
                @{speaker.twitter}
              </a>
            ) : null}

            <div className={styles.textBlock}>
              <PortableText value={speaker.bio} />
            </div>

            <h2>Talk</h2>
            <h3>{speaker.talkTitle}</h3>
            <div className={styles.textBlock}>
              <PortableText value={speaker.talkDescription} />
            </div>
          </>
        )}

      </div>
    </Layout>
  )
}

export default SpeakerPage
