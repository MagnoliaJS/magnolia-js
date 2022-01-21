import { Head, Link } from "blitz"

const Sponsors = () => (
  <>
    <Head>
      <title>Sponsors | MagnoliaJS</title>
    </Head>
    <h1 className="text-center text-3xl">Sponsors</h1>
    <p className="text-center">Come back soon to check out our 2022 sponsors!</p>
    <p className="text-center">
      Interested in sponsoring?{" "}
      <a className="text-pink-600 underline" href="mailto:sponsors@magnoliajs.com">
        Let us know
      </a>
      !
    </p>
    <p className="text-center">
      You can also check out our{" "}
      <Link href="/sponsors/past-sponsors" className="text-pink-600 underline">
        past sponsors
      </Link>
      !
    </p>
  </>
)

Sponsors.suppressFirstRenderFlicker = true
export default Sponsors
