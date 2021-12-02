import { Head } from "blitz"

const Home = () => (
  <div className="container">
    <Head>
      <title>MagnoliaJS</title>
    </Head>
    <h1 className="text-center text-3xl">Home</h1>
  </div>
);

Home.suppressFirstRenderFlicker = true
export default Home
