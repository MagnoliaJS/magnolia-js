import { Head, Link } from "blitz"

const Faq = () => (
  <>
    <Head>
      <title>FAQ | MagnoliaJS</title>
    </Head>
    <h1 className="text-center text-3xl mb-4">Frequently Asked Questions</h1>
    <h2>COVID</h2>
    <h3>Is proof of vaccination required for admission?</h3>
    <p>You will need to provide either:</p>
    <ul>
      <li>proof of vaccination with a booster (if eligible).</li>
      <ul>
        <li>
          Refer to the{" "}
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/booster-shot.html?s_cid=11706:cdc%20covid%20booster:sem.ga:p:RG:GM:gen:PTN:FY22"
            className="underline text-pink-600"
            rel="noreferrer"
            target="_blank"
          >
            CDC's eligibility guidelines
          </a>{" "}
          to see if you need a booster.
        </li>
      </ul>
      <li>a negative PCR test dated May 6, 2022 or later.</li>
    </ul>
    <h3>Do I have to wear a mask at the event?</h3>
    <p>
      <strong>Yes</strong>, you will need to wear a mask at all times while not eating or drinking
      at MagnoliaJS. Masks will be available at registration.
    </p>

    <h2>Location</h2>
    <h3>Is MagnoliaJS 2022 in person?</h3>
    <p>YES! We're looking forward to seeing everyone's (masked) faces in Jackson this year!</p>

    <h2>Speaking</h2>
    <h3>Will there be a Call For Papers (CFP)?</h3>
    <p>
      For MagnoliaJS 2022, there will <strong>not</strong> be a CFP. We're a two-person team this
      year, so time is at a premium! We're hoping to assemble a team for the 2023 conference, so be
      on the lookout for that CFP later this year!
    </p>
  </>
)

Faq.suppressFirstRenderFlicker = true
export default Faq
