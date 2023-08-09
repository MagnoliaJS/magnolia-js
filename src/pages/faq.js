import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import Link from 'next/link'

const Faq = () => (
  <Layout>
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
      <strong>YES,</strong> we will be streaming MagnoliaJS 2023! The event will
      be streamed via YouTube this year. Register for a FREE{' '}
      <a href="/tickets" rel="noreferrer" target="_blank">
        virtual conference ticket
      </a>{' '}
      to get the link when it is available (roughly 24 hours before the event
      begins).
    </p>

    <h2>COVID &amp; Other Illnesses</h2>
    <h3>Can I come to MagnoliaJS 2023 if I&apos;m sick?</h3>
    <p>
      <strong>No</strong>. Regardless of if you have COVID or some other
      communicable illness, we encourage you to stay at home. If you are sick,
      please let us know and we will work with you to either refund your ticket,
      transfer it to someone else, or transfer it to next year&apos;s event.
    </p>
    <h3>Do I have to wear a mask at the event?</h3>
    <p>
      <strong>No</strong>. Masks are encouraged, but not required at MagnoliaJS
      2023. N95 masks will be available at registration.
    </p>
    <p>
      Check our <Link href="/covid">COVID-19 Policy</Link> page for more
      information.
    </p>

    <h2>About MagnoliaJS</h2>
    <h3>
      Why <em>Magnolia</em>JS?
    </h3>
    <p>
      The Magnolia is the{' '}
      <a
        href="https://www.sos.ms.gov/content/documents/ed_pubs/pubs/MS%20Symbol%20Sheet%20New%20Seal%202015.pdf"
        rel="noreferrer"
        target="_blank"
      >
        state flower and state tree of Mississippi
      </a>
      ! Mississippi is also known as &quot;The Magnolia State&quot; and as of
      January 11, 2021, a Magnolia blossom is featured prominently on our state
      flag.
    </p>
    <p>
      For MagnoliaJS 2021, we created{' '}
      <a
        href="https://buy.stripe.com/fZe3en3sR4xkcYU6op"
        rel="noreferrer"
        target="_blank"
      >
        stickers featuring the new flag
      </a>{' '}
      for the state of Mississippi and sent them to Mississippi residents. Those
      are now available for purchase to help fund future events!
    </p>

    <h2>Location</h2>
    <h3>Is MagnoliaJS 2023 in person?</h3>
    <p>
      YES! We&apos;re looking forward to seeing everyone in Jackson this year!
      We&apos;ll be hosting the event at the Mississippi Museum of Art. To learn
      more about the venue and travel, visit our{' '}
      <Link href="/venue">Venue and Travel page.</Link>
    </p>

    <h2>Speaking</h2>
    <h3>Can I speak at MagnoliaJS 2023?</h3>
    <p>
      Our CFP for this year has closed, but be on the look out for next
      year&apos;s!
    </p>
  </Layout>
)

export default Faq
