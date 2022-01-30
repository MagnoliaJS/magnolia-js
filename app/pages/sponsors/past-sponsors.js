import { Head, Link } from "blitz"

import styles from "./past-sponsors.module.css"

import Sponsor from "../../components/Sponsor"
import sponsors from "public/sponsors/past.json"

const PastSponsors = () => {
  return (
    <>
      <Head>
        <title>Past Sponsors | MagnoliaJS</title>
      </Head>
      <h1>Past Sponsors</h1>
      <div className={styles.sponsors}>
        {sponsors.map((sponsor) => (
          <Sponsor name={sponsor.name} link={sponsor.link} logo={sponsor.logo} key={sponsor.link} />
        ))}
      </div>
      <p>
        Interested in sponsoring?{" "}
        <Link href="/sponsors/sponsorship-info">
          <a>Let us know</a>
        </Link>
        !
      </p>
    </>
  )
}

PastSponsors.suppressFirstRenderFlicker = true
export default PastSponsors
