import { Head, Link } from "blitz"

const Faq = () => (
  <>
    <Head>
      <title>FAQ | MagnoliaJS</title>
    </Head>
    <h1>Frequently Asked Questions</h1>
    <h2>COVID</h2>
    <h3>Is proof of vaccination required for admission?</h3>
    <p>You will need to provide either:</p>
    <ul>
      <li>
        proof of vaccination with a booster (if eligible).
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
      </li>
      <li>a negative PCR test dated September 9, 2022 or later.</li>
    </ul>
    <p>
      If this makes you feel uncomfortable, we encourage you to sit this year's conference out and
      join us when you're ready!
    </p>

    <h3>Do I have to wear a mask at the event?</h3>
    <p>
      <strong>Yes</strong>, you will need to wear a mask at all times while not eating or drinking
      at MagnoliaJS. Masks will be available at registration. If this makes you feel uncomfortable,
      we encourage you to sit this year's conference out and join us when you're ready!
    </p>

    <h2>About MagnoliaJS</h2>
    <h3>
      Why <em>Magnolia</em>JS?
    </h3>
    <p>
      The Magnolia is the{" "}
      <a
        href="https://www.sos.ms.gov/content/documents/ed_pubs/pubs/MS%20Symbol%20Sheet%20New%20Seal%202015.pdf"
        rel="noreferrer"
        target="_blank"
      >
        state flower and state tree of Mississippi
      </a>
      ! Mississippi is also known as "The Magnolia State" and as of January 11, 2021, a Magnolia
      blossom is featured prominently on our state flag.
    </p>
    <p>
      For MagnoliaJS 2021, we created{" "}
      <a href="https://buy.stripe.com/fZe3en3sR4xkcYU6op" rel="noreferrer" target="_blank">
        stickers featuring the new flag
      </a>{" "}
      for the state of Mississippi and sent them to Mississippi residents. Those are now available
      for purchase to help fund future events!
    </p>

    <h2>Location</h2>
    <h3>Is MagnoliaJS 2022 in person?</h3>
    <p>
      YES! We're looking forward to seeing everyone's (masked) faces in Jackson this year! Venue
      details are coming soon!
    </p>

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
