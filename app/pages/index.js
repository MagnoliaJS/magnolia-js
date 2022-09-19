import { Head, Image, Link } from "blitz"

import magnoliajs2019 from "public/magnoliajs-2019-26.jpg"

const Home = () => (
  <div className="center-text">
    <Head>
      <title>MagnoliaJS</title>
    </Head>
    <h1>MagnoliaJS 2023 dates coming soon!</h1>
    <Image
      src={magnoliajs2019}
      alt="Audience listening to Ken Wheeler speak at MagnoliaJS 2019."
      placeholder="blur"
    />
    <p>
      Thank y'all for an amazing 2022 conference! See you in 2023! Stay tuned for announcements!
    </p>
    <p>
      If you'd like to see the talks from MagnoliaJS 2021 and 2022, check out{" "}
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
        <a>interested in sponsoring MagnoliaJS 2023</a>
      </Link>
      !
    </p>
  </div>
)

Home.suppressFirstRenderFlicker = true
export default Home
