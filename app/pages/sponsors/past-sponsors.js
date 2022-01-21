import { Head } from "blitz"

import Sponsor from "../../components/Sponsor"
import sponsors from "public/sponsors/past.json"

const PastSponsors = () => {
  return (
    <>
      <Head>
        <title>Past Sponsors | MagnoliaJS</title>
      </Head>
      <h1 className="text-center text-3xl mb-4">Past Sponsors</h1>
      <div className="flex flex-wrap justify-around">
        {sponsors.map((sponsor) => (
          <Sponsor name={sponsor.name} link={sponsor.link} logo={sponsor.logo} key={sponsor.link} />
        ))}
      </div>
      <p className="text-center">
        Interested in sponsoring?{" "}
        <a className="text-pink-600 underline" href="mailto:sponsors@magnoliajs.com">
          Let us know
        </a>
        !
      </p>
    </>
  )
}

PastSponsors.suppressFirstRenderFlicker = true
export default PastSponsors
