import { Head, Image, Link } from "blitz"

import magnoliajs2019 from "public/magnoliajs-2019-26.jpg"

const Home = () => (
  <div className="center-text">
    <Head>
      <title>MagnoliaJS</title>
    </Head>
    <h1>MagnoliaJS coming to you October 17-18, 2023!</h1>
    <Image
      src={magnoliajs2019}
      alt="Audience listening to Ken Wheeler speak at MagnoliaJS 2019."
      placeholder="blur"
    />
    <p>
      Get ready for a special Halloween-edition MagnoliaJS 2023! More details and information to
      come! Join us October 17-18, 2023 at the Mississippi Museum of Art in Jackson, MS for a
      spooky-good time!
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
