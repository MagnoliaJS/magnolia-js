import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Sponsor from '@/components/Sponsor/Sponsor'
import { getSponsors } from '@/sanity/sanity.query'
import Layout from '@/components/Layout/Layout'

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([])

  useEffect(() => {
    const fetchSponsors = async () => {
      const sponsors = await getSponsors()
      setSponsors(sponsors)
    }

    fetchSponsors()
  }, [])
  return (
    <Layout>
      <div className="center-text">
        <Head>
          <title>Past Sponsors | MagnoliaJS</title>
        </Head>
        <h1>Past Sponsors</h1>
        <p>
          Interested in sponsoring MagnoliaJS 2023? Take a look at our{' '}
          <a
            href="https://drive.google.com/file/d/1T9lM-y1e-QgPFvGFKWd39XhDMOz5H3uM/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            sponsorship prospectus
          </a>
          !
        </p>

        {sponsors.map((sponsor) => (
          <Sponsor key={sponsor.name} {...sponsor} />
        ))}

        <p>
          You can also check out our{' '}
          <Link href="/sponsors/past-sponsors">past sponsors</Link>!
        </p>
      </div>
    </Layout>
  )
}

export default Sponsors
