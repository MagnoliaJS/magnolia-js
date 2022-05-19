import { Head, Link } from "blitz"
import Sponsor from "../components/Sponsor"
import sponsors from "public/sponsors/current.json"

const Sponsors = () => (
  <div className="center-text">
    <Head>
      <title>Sponsors | MagnoliaJS</title>
    </Head>
    <h1>Sponsors</h1>
    <p>Thank you to our 2022 sponsors!</p>
    <h2>Community Sponsors</h2>
    {sponsors.map((sponsor) => {
      if (sponsor.type === "community") {
        return (
          <Sponsor name={sponsor.name} link={sponsor.link} logo={sponsor.logo} key={sponsor.link} />
        )
      }
    })}
    <p>
      Interested in sponsoring?{" "}
      <Link href="/sponsors/sponsorship-info">
        <a>Let us know</a>
      </Link>
      !
    </p>
    <p>
      You can also check out our{" "}
      <Link href="/sponsors/past-sponsors">
        <a>past sponsors</a>
      </Link>
      !
    </p>
  </div>
)

Sponsors.suppressFirstRenderFlicker = true
export default Sponsors
