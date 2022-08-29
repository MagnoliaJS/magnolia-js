import { Head, Image, Link } from "blitz"

import magnoliajs2019 from "public/magnoliajs-2019-26.jpg"

const Home = () => (
  <div className="center-text">
    <Head>
      <title>MagnoliaJS</title>
    </Head>
    <h1>MagnoliaJS 2022 is coming September 13-14!</h1>
    <Image
      src={magnoliajs2019}
      alt="Audience listening to Ken Wheeler speak at MagnoliaJS 2019."
      placeholder="blur"
    />
    <p>
      Get ready for MagnoliaJS 2022! Join us at the Mississippi Museum of Art in Jackson, MS on
      September 13-14 for code, fun times, and <em>vibes</em>. Tickets are available now!
    </p>
    <a href="https://ti.to/magnoliajs/2022">Buy your ticket today!</a>
    <p>
      If you'd like to see the talks from MagnoliaJS 2021, check out{" "}
      <a
        href="https://www.youtube.com/channel/UCiP-LfJJjBMANN8JXySXCDA"
        target="_blank"
        rel="noreferrer"
      >
        the MagnoliaJS YouTube channel
      </a>
      !
    </p>
    <p>
      Please let us know if your company is{" "}
      <Link href="/sponsors/sponsorship-info">
        <a>interested in sponsoring MagnoliaJS 2022</a>
      </Link>
      !
    </p>
  </div>
)

Home.suppressFirstRenderFlicker = true
export default Home
