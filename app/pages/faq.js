import { Head, Link } from "blitz"

const Faq = () => (
  <>
    <Head>
      <title>FAQ | MagnoliaJS</title>
    </Head>
    <h1>Frequently Asked Questions</h1>
    <h2>Conference Logistics</h2>

    {/* <h3>Where is the schedule?</h3>
    <p>
      You can find the schedule on the <Link href="/schedule">Schedule</Link> page on our site.
    </p> */}

    <h3>Will the conference be streamed again this year?</h3>
    <p>
      <strong>YES,</strong> we will be streaming MagnoliaJS 2023! The event will be streamed via
      YouTube this year.
    </p>

    <h2>COVID</h2>
    <h3>Do I have to wear a mask at the event?</h3>
    <p>
      <strong>Yes</strong>, you will need to wear a mask at all times while not eating or drinking
      at MagnoliaJS. Masks will be available at registration. If this makes you feel uncomfortable,
      we encourage you to sit this year's conference out and join us when you're ready!
    </p>
    <p>
      Check our{" "}
      <Link href="/covid">
        <a>COVID-19 Policy</a>
      </Link>{" "}
      page for more information.
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
    <h3>Is MagnoliaJS 2023 in person?</h3>
    <p>
      YES! We're looking forward to seeing everyone's (masked) faces in Jackson this year! We'll be
      hosting the event at the Mississippi Museum of Art. To learn more about the venue and travel,
      visit our{" "}
      <Link href="/venue">
        <a>Venue and Travel page.</a>
      </Link>
    </p>

    <h2>Speaking</h2>
    <h3>Will there be a Call For Papers (CFP)?</h3>
    <p>
      <strong>YES</strong>! We have a{" "}
      <a href="https://sessionize.com/magnoliajs-2023/" rel="noreferrer" target="_blank">
        CFP for MagnoliaJS 2023
      </a>{" "}
      which closes on March 1, 2023.
    </p>
  </>
)

Faq.suppressFirstRenderFlicker = true
export default Faq
