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
        Rapid testing will be required at the venue each morning. Attendees, speakers, sponsors, and
        volunteers must have a negative rapid test to enter the venue each day.
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
      <li>We will have additional air purification around the venue.</li>
      <li>
        If you are feeling unwell or have been exposed to COVID-19, we ask that you skip this year's
        event. You will be able to re-assign your ticket to someone eles or have your ticket applied
        to next year's conference.
      </li>
    </ul>
    <h2>You should stay home if:</h2>
    On or after September 30, 2023:
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
  </>
)

Covid.suppressFirstRenderFlicker = true
export default Covid
