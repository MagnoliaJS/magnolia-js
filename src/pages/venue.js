import Layout from '@/components/Layout/Layout'
import Head from 'next/head'

const Venue = () => (
  <Layout>
    <Head>
      <title>Venue & Travel Info | MagnoliaJS</title>
    </Head>
    <h1>Venue &amp; Travel Info</h1>
    <h2>Conference Venue - The Mississippi Museum of Art</h2>
    <div className="split-view">
      <div>
        <h3>
          380 South Lamar Street, Jackson MS 39201 (
          <a
            href="https://goo.gl/maps/qLrLWjCeUuJHKLFMA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Map Link
          </a>
          )
        </h3>
        <p>
          From the{' '}
          <a
            href="https://www.msmuseumart.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            museum&apos;s website:
          </a>
        </p>
        <p>
          <i>
            The Mississippi Museum of Art is more than an art museum in Jackson,
            Mississippi. It is a museum of Mississippi—a museum that connects
            Mississippians to our culture, our history, our communities, and to
            each other. It is a museum informed by the legacy of our past and
            emboldened by a vision of a future without division.
          </i>
        </p>
        <p>
          We&apos;re excited to host MagnoliaJS 2022 at the Mississippi Museum
          of Art in their beautiful event space. Attendees will also have the
          ability to enjoy the museum&apos;s collection of Mississippi art
          during the event.
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.580127185259!2d-90.1871942330183!3d32.29626479055988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8628324d37bbca2f%3A0x6d4af58a9fde73cd!2sMississippi%20Museum%20of%20Art!5e0!3m2!1sen!2sus!4v1657237092898!5m2!1sen!2sus"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <h2>Conference Hotel - The Westin Jackson</h2>
    <h3>
      407 S Congress St, Jackson, MS 39201 (
      <a
        href="https://g.page/WestinJackson?share"
        target="_blank"
        rel="noopener noreferrer"
      >
        Map Link
      </a>
      )
    </h3>
    <p>
      The Westin Jackson is the closest hotel to the venue - just steps away
      from the MS Museum of Art. We don't currently have a room block reserved,
      but if there is interest we can do so.
    </p>
    <hr />
    <h2>Travel Info</h2>
    <p>
      <strong>Flying in?</strong> Nearest Airport - Jackson-Medgar Wiley Evers
      International Airport (JAN)
    </p>
    <p>
      <strong>Road trip?</strong> Driving times from:
    </p>
    <ul>
      <li>New Orleans - 2 hrs 45 min</li>
      <li>Memphis - 3 hrs</li>
      <li>Atlanta - 5 hrs 30mins</li>
      <li>Dallas - 6 hrs</li>
    </ul>
  </Layout>
)

export default Venue
