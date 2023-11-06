import Head from "next/head"
import Layout from "@/components/Layout/Layout"

const Covid = () => (
  <Layout>
    <Head>
      <title>COVID-19 Policy | MagnoliaJS</title>
    </Head>
    <h1>COVID-19 Policy</h1>
    <p>
      <strong>TLDR</strong>: please don&apos;t come to MagnoliaJS if you&apos;re sick, even if it&apos;s not COVID.
      Join us when you feel better. 🧡
    </p>
    <p>
      The health and safety of our attendees, speakers, sponsors, and vendors is our number one
      priority. As such, this policy may change as we get closer to the event.
    </p>
    <h2>Health and Safety Policy</h2>
    <p>
      As of now, these are the current safety procedures MagnoliaJS will be enforcing during the
      conference:
    </p>
    <ul>
      <li>
        Masks are recommended, but not required. N95 masks will be provided for all attendees free
        of charge at check-in if desired.
      </li>
      <li>
        Hand sanitizer will be available at check-in, at meal service, and at various locations
        throughout the venue.
      </li>
      <li>We, along with the venue staff, will be routinely sanitizing high-touch surfaces.</li>
      <li>
        We will have{" "}
        <a href="https://molekule.com" rel="noreferrer" target="_blank">
          Molekule air purifiers
        </a>{" "}
        around the venue.
      </li>
      <li>
        If you are feeling unwell or have been exposed to COVID-19, we ask that you skip this year&apos;s
        event. You will be able to re-assign your ticket to someone else, have your ticket applied
        to next year&apos;s conference, or request a refund.
      </li>
    </ul>
    <h2>You should stay home if:</h2>
    On or after October 1, 2024:
    <ul>
      <li>You have tested positive for COVID-19, or</li>
      <li>
        You have experienced fever, cough, shortness of breath, or any other symptoms listed on the{" "}
        <a
          href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
          target="_blank"
          rel="noreferrer"
        >
          CDC list of symptoms of COVID-19
        </a>
        , or
      </li>
      <li>
        You have been exposed to someone diagnosed with COVID-19 and have not had a negative test
        result.
      </li>
    </ul>

    <p>
      <strong>Please note that this policy may change as the situation does.</strong> Failure to
      abide by the MagnoliaJS COVID policy will result in your removal from the event without
      refund. The MagnoliaJS team will continue to monitor CDC recommendations as well as local
      conditions and update this policy as needed to ensure the health and safety of all at
      MagnoliaJS 2023!
    </p>
  </Layout>
)

export default Covid
