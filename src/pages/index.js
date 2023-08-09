import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout/Layout'
import magnoliajs2022 from 'public/MagnoliaJS2022Main.jpeg'

const Home = () => (
  <Layout>
    <div className="center-text">
      <Head>
        <title>MagnoliaJS</title>
      </Head>
      <h1>MagnoliaJS coming to you October 17-18, 2023!</h1>
      <Image
        src={magnoliajs2022}
        alt="Audience listening to a speaker speak at MagnoliaJS 2022."
        placeholder="blur"
        loading="lazy"
        layout="intrinsic"
      />
      <p>
        Get ready for a special Halloween-edition MagnoliaJS 2023! Check out our
        list of amazing <Link href="/speakers">speakers</Link> and thank our{' '}
        <Link href="/sponsors">sponsors</Link> for making this event possible!
        Join us October 17-18, 2023 at the Mississippi Museum of Art in Jackson,
        MS for a spooky-good time!
      </p>

      <h2>About MagnoliaJS</h2>
      <p>
        MagnoliaJS is a community-driven conference for web developers in
        Mississippi and beyond. Our mission is to foster a vibrant and inclusive
        community of tech enthusiasts, and to showcase the amazing work that is
        being done in our state.
      </p>
      <p>
        We started in 2019 as a one-day event with 150 attendees and 12
        speakers. Since then, we have grown to a two-day event with over 300
        attendees and 24 speakers from all over the country. We are proud to be
        the first and only developer conference in Mississippi, and one of the
        few in the region. Our conference features a diverse lineup of speakers,
        covering topics such as React, Vue, Angular, Node, GraphQL, TypeScript,
        Serverless, Accessibility, Performance, Testing, and more.
      </p>
      <p>
        MagnoliaJS is organized by native Mississippians,{' '}
        <a
          href="https://twitter.com/_KaylaSween"
          target="_blank"
          rel="noreferrer"
        >
          Kayla
        </a>{' '}
        and{' '}
        <a
          href="https://twitter.com/_RichardSween"
          target="_blank"
          rel="noreferrer"
        >
          Richard Sween
        </a>
        {', '}
        who are passionate supporting the developer community in the heart of
        the Hospitality State. We are supported by our generous sponsors, who
        help us keep the ticket prices affordable and provide scholarships for
        underrepresented groups.
      </p>
      <p>
        We welcome developers of all backgrounds, skill levels, and interests to
        join us at MagnoliaJS 2023. Whether you are a seasoned professional or a
        beginner, you will find something to inspire you, challenge you, and
        connect you with others who share your passion.
      </p>

      <p>
        MagnoliaJS is a software development conference in Jackson, Mississippi.
        With MagnoliaJS, we want to highlight Mississippi&apos;s growing and
        thriving developer talent in the heart of the Hospitality State. Now in
        its fifth year, we are building on the success from previous years and
        continuing to work to bring developers from around the nation to
        Jackson, MS to showcase the city, state, and community we are building
        here in Mississippi.
      </p>

      <h2>Previous Years</h2>
      <p>
        If you&apos;d like to see the talks from MagnoliaJS 2021 and 2022, check
        out{' '}
        <a
          href="https://www.youtube.com/@magnoliajs/playlists"
          target="_blank"
          rel="noreferrer"
        >
          the MagnoliaJS YouTube channel
        </a>
        !
      </p>

      <h2>Sponsorship Opportunities</h2>
      <p>
        Feel free to take a look at our{' '}
        <a
          href="https://drive.google.com/file/d/1T9lM-y1e-QgPFvGFKWd39XhDMOz5H3uM/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          sponsorship prospectus
        </a>{' '}
        to learn more about sponsorship opportunities for MagnoliaJS 2023 and
        please let us know if your company is{' '}
        <Link href="/sponsors/sponsorship-info">interested in sponsoring</Link>!
      </p>
    </div>
  </Layout>
)

export default Home
