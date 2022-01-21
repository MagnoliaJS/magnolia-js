import { Head, Image } from "blitz"
import magnoliajs2019 from "public/magnoliajs-2019-26.jpg"

const Home = () => (
  <div className="text-center">
    <Head>
      <title>MagnoliaJS</title>
    </Head>
    <h1 className="text-3xl mb-4">MagnoliaJS 2022 is coming May 10-11!</h1>
    <Image src={magnoliajs2019} alt="Audience listening to Ken Wheeler speak at MagnoliaJS 2019." />
    <p>
      Get ready for the next MagnoliaJS! Join us in Jackson, MS for bowling, code, and{" "}
      <em>vibes</em>.
    </p>
    <p>
      If you'd like to see the talks from MagnoliaJS 2021, check out{" "}
      <a
        className="text-pink-600 underline"
        href="https://www.youtube.com/channel/UCiP-LfJJjBMANN8JXySXCDA"
      >
        the MagnoliaJS YouTube channel
      </a>
      !
    </p>
  </div>
)

Home.suppressFirstRenderFlicker = true
export default Home
