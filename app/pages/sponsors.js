import { Head, Link } from "blitz"

const Sponsors = () => (
  <div className="container">
    <Head>
      <title>Sponsors | MagnoliaJS</title>
    </Head>
    <h1 className="text-center text-3xl">Sponsors</h1>
    <p className="text-center">Come back soon to check out our sponsors!</p>
    <p>Interested in sponsoring? <Link href="/sponsors/sponsorship-info">Let us know</Link>!</p>
  </div>
);

Sponsors.suppressFirstRenderFlicker = true
export default Sponsors
