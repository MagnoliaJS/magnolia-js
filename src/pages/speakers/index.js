import Head from "next/head"
import Speaker from "@/components/Speaker/Speaker"
import Layout from "@/components/Layout/Layout"
import { getSpeakers } from "@/sanity/sanity.query"
import { useEffect, useState } from "react"

const Speakers = () => {
  const [speakers, setSpeakers] = useState([])

  useEffect(() => {
    const fetchSpeakers = async () => {
      const speakers = await getSpeakers()
      setSpeakers(speakers)
    }

    fetchSpeakers()
  }, [])

  return (
    <Layout>
      <div className="center-text">
        <Head>
          <title>Speakers | MagnoliaJS</title>
        </Head>
        <h1>Speakers</h1>
        <p>Come learn from such incredibly talented people as:</p>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {speakers
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((speaker) => {
              return <Speaker key={speaker._id} {...speaker} />
            })}
        </div>
      </div>
    </Layout>
  )
}

export default Speakers
