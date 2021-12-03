import { Head } from "blitz"

const SponsorshipInfo = () => (
  <div className="container">
    <Head>
      <title>Sponsorship Interest Request | MagnoliaJS</title>
    </Head>
    <h1 className="text-center text-3xl">Sponsorship Interest Request</h1>
    <p className="text-center">Thanks for your interest in sponsoring MagnoliaJS! Fill out this form and we&quot;ll get back to you ASAP.</p>
  </div>
);

SponsorshipInfo.suppressFirstRenderFlicker = true
export default SponsorshipInfo
