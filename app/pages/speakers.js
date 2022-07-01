import { Head, Link } from "blitz"
import Speaker from "../components/Speaker"

const Speakers = () => (
  <div className="center-text">
    <Head>
      <title>Speakers | MagnoliaJS</title>
    </Head>
    <h1>Speakers</h1>
    <Speaker info={speaker} />
  </div>
)

Speakers.suppressFirstRenderFlicker = true
export default Speakers
