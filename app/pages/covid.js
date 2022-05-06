import { Head, Link } from "blitz"

const Covid = () => (
  <>
    <Head>
      <title>COVID-19 Policy | MagnoliaJS</title>
    </Head>
    <h1>COVID-19 Policy</h1>
    <p>
      The MagnoliaJS team is monitoring the COVID-19 situation. The health and safety of our
      attendees, speakers, sponsors, and vendors is our number one priority. As such, this policy
      may change as we get closer to the event.
    </p>
    <h2>Health and Safety Policy</h2>
    <p>
      As of now, these are the current safety procedures MagnoliaJS will be enforcing during the
      conference:
    </p>
    <ul>
      <li>
        Proof of vaccination against COVID-19 including booster shots if eligible, OR a negative PCR
        test dated on or after September 9th, 2022. Note that an "at-home" or "rapid" test result
        will not be accepted for admission to the event.
      </li>
      <li>
        Mask are required at all times inside the conference venue unless actively eating or
        drinking. N95 masks are recommended and will be provided for all attendees free of charge at
        check-in.
      </li>
      <li>
        Hand sanitizer will be available at check-in, at meal service, and at various locations
        throughout the venue.
      </li>
      <li>We, along with the venue staff, will be routinely sanitizing high-touch surfaces.</li>
      <li>Trained medical staff will be on-hand for the duration of the event.</li>
      <li>
        If you are feeling unwell or have been exposed to COVID-19, we ask that you skip this year's
        event. You will be able to re-assign your ticket to someone eles or have your ticket applied
        to next year's conference.
      </li>
    </ul>
    <h2>You should stay home if:</h2>
    On or after August 30, 2022:
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
        result, following the{" "}
        <a
          href="https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html#:~:text=People%20who%20have%20come%20into%20close%20contact%C2%A0with%20someone%20with%20COVID%2D19%20should%20be%20tested%20to%20check%20for%20infection%20at%20least%205%20days%20after%20they%20last%20had%20close%20contact%20with%20someone%20with%20COVID%2D19.%20The%20date%20of%20the%20last%20close%20contact%20is%20considered%20day%200."
          target="_blank"
          rel="noreferrer"
        >
          CDC policy defined here
        </a>
        .
      </li>
    </ul>
    <p>
      <strong>Please note that this policy may change as the situation does.</strong> The MagnoliaJS
      team will continue to monitor CDC recommendations as well as local conditions and update this
      policy as needed to ensure the health and safety of all at MagnoliaJS 2022!
    </p>
  </>
)

Covid.suppressFirstRenderFlicker = true
export default Covid
