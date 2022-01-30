import { Head, Image } from "blitz"
import magnoliajs2019 from "public/magnoliajs-2019-26.jpg"

const Home = () => (
  <>
    <Head>
      <title>MagnoliaJS</title>
    </Head>
    <h1>MagnoliaJS 2022 is coming May 10-11!</h1>
    <Image
      src={magnoliajs2019}
      alt="Audience listening to Ken Wheeler speak at MagnoliaJS 2019."
      placeholder="blur"
    />
    <p>
      Get ready for the next MagnoliaJS! Join us in Jackson, MS for code, fun times, and{" "}
      <em>vibes</em>.
    </p>
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
  </>
)

Home.suppressFirstRenderFlicker = true
export default Home
