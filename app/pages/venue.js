import { Head, Link } from "blitz"

const Venue = () => (
  <>
    <Head>
      <title>Venue & Travel Info | MagnoliaJS</title>
    </Head>
    <h1>Venue & Travel Info</h1>
    <h2>Conference Venue - The Mississippi Museum of Art</h2>
    <div className="split-view">
      <div>
        <h3>
          380 South Lamar Street, Jackson MS 39201 (
          <a href="https://goo.gl/maps/qLrLWjCeUuJHKLFMA" target="_blank" rel="noopener noreferrer">
            Map Link
          </a>
          )
        </h3>
        <p>
          From the{" "}
          <a href="https://www.msmuseumart.org/" target="_blank" rel="noopener noreferrer">
            museum's website:
          </a>
        </p>
        <p>
          <i>
            The Mississippi Museum of Art is more than an art museum in Jackson, Mississippi. It is
            a museum of Mississippi—a museum that connects Mississippians to our culture, our
            history, our communities, and to each other. It is a museum informed by the legacy of
            our past and emboldened by a vision of a future without division.
          </i>
        </p>
        <p>
          We're excited to host MagnoliaJS 2022 at the Mississippi Museum of Art in their beautiful
          event space. Attendees will also have the ability to enjoy the museum's collection of
          Mississippi art during the event.
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.580127185259!2d-90.1871942330183!3d32.29626479055988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8628324d37bbca2f%3A0x6d4af58a9fde73cd!2sMississippi%20Museum%20of%20Art!5e0!3m2!1sen!2sus!4v1657237092898!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <h2>Conference Hotel - The Westin Jackson</h2>
    <h3>
      407 S Congress St, Jackson, MS 39201 (
      <a href="https://g.page/WestinJackson?share" target="_blank" rel="noopener noreferrer">
        Map Link
      </a>
      )
    </h3>
    <p>
      The conference hotel is the Westin Jackson, located adjacent to the Mississippi Museum of Art.
      We have a room block at the Westin reserved at $179/night. Our block rate is available from
      Friday, September 9th through Sunday September 18th, so take advantage of this rate to spend a
      few extra days enjoying what Jackson has to offer. More on that soon!
    </p>
    <p>The Westin Jackson will also host our pre-event mixer on the evening of September 12th.</p>
    <a
      href="https://www.marriott.com/events/start.mi?id=1655748400297&key=GRP"
      target="_blank"
      rel="noopener noreferrer"
    >
      Book your room at The Westin Jackson
    </a>
    <hr />
    <h2>Travel Info</h2>
    <p>
      <strong>Flying in?</strong> Nearest Airport - Jackson-Medgar Wiley Evers International Airport
      (JAN)
    </p>
    <p>
      <strong>Road trip?</strong> Driving times from:
      <ul>
        <li>New Orleans - 2 hrs 45 min</li>
        <li>Memphis - 3 hrs</li>
        <li>Atlanta - 5 hrs 30mins</li>
        <li>Dallas - 6 hrs</li>
      </ul>
    </p>
    <p>
      <strong>Things to do?</strong> Coming soon!
    </p>
  </>
)

Venue.suppressFirstRenderFlicker = true
export default Venue
