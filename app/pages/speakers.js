import { Head } from "blitz"
import Speaker from "../components/Speaker"
import speakers from "public/speakers/speakers.json"

const Speakers = () => (
  <div className="center-text">
    <Head>
      <title>Speakers | MagnoliaJS</title>
    </Head>
    <h1>Speakers</h1>
    <p>Come learn from such incredibly talented people as:</p>

    <div className="two-column">
      {speakers
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((speaker) => {
          return <Speaker {...speaker} />
        })}
    </div>

    <p>and more coming soon!</p>
  </div>
)

Speakers.suppressFirstRenderFlicker = true
export default Speakers
