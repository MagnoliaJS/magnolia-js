import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Sponsor from "@/components/Sponsor/Sponsor"
import { getSponsors } from "@/sanity/sanity.query"
import Layout from "@/components/Layout/Layout"

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([])

  useEffect(() => {
    const fetchSponsors = async () => {
      const sponsors = await getSponsors()
      // probably can do this with groq
      const currentSponsors = sponsors.filter((sponsor) => sponsor.year === 2023)
      setSponsors(currentSponsors)
    }

    fetchSponsors()
  }, [])
  return (
    <Layout>
      <div className="center-text">
        <Head>
          <title>Sponsors | MagnoliaJS</title>
        </Head>
        <h1>Sponsors</h1>
        <p>
          Interested in sponsoring MagnoliaJS 2024?{" "}
          Take a look at our{" "}
          <a
            href="https://drive.google.com/file/d/1T9lM-y1e-QgPFvGFKWd39XhDMOz5H3uM/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            sponsorship prospectus
          </a>
          !
        </p>
        <p>
          You can also check out our{" "}
          <Link href="/sponsors/past-sponsors">
            past sponsors
          </Link>
          !
        </p>
      </div>
    </Layout>
  )
}

export default Sponsors
