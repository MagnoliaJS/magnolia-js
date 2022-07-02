import { Head, Image } from "blitz"
import { useState } from "react"
import magnolia19 from "public/magnoliajs-2019-135.jpg"

const SponsorFormSuccess = () => {
  return (
    <>
      <Head>
        <title>Sponsorship Interest Form Success | MagnoliaJS</title>
      </Head>
      <h1>Thanks for your submission!</h1>
      <p className="center-text">
        Thanks for your interest in sponsoring MagnoliaJS! We'll be in touch with you soon!
      </p>
      <div>
        <Image
          src={magnolia19}
          placeholder="blur"
          alt="Folks hanging out during a break at MagnoliaJS 2019."
        />
      </div>
    </>
  )
}

SponsorFormSuccess.suppressFirstRenderFlicker = true
export default SponsorFormSuccess
