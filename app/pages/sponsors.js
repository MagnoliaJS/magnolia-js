import { Head, Link } from "blitz"
// import Sponsor from "../components/Sponsor"

const Sponsors = () => (
  <div className="center-text">
    <Head>
      <title>Sponsors | MagnoliaJS</title>
    </Head>
    <h1>Sponsors</h1>
    <p>
      Interested in sponsoring MagnoliaJS 2023?{" "}
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
