import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/Layout/Layout"
import magnoliajs2022 from "public/MagnoliaJS2022Main.jpeg"

const Home = () => (
  <Layout>
    <div className="center-text">
      <Head>
        <title>MagnoliaJS</title>
      </Head>
      <h1>MagnoliaJS coming to you October 17-18, 2023!</h1>
      <Image
        src={magnoliajs2022}
        alt="Audience listening to Ken Wheeler speak at MagnoliaJS 2019."
        placeholder="blur"
        loading="lazy"
        layout="intrinsic"
      />
      <p>
        Get ready for a special Halloween-edition MagnoliaJS 2023! More details and information to
        come! Join us October 17-18, 2023 at the Mississippi Museum of Art in Jackson, MS for a
        spooky-good time!
      </p>

      <h2>About MagnoliaJS</h2>
      <p>
        MagnoliaJS is a software development conference in Jackson, Mississippi. With MagnoliaJS, we
        want to highlight Mississippi&apos;s growing and thriving developer talent in the heart of the
        Hospitality State. Now in its fifth year, we are building on the success from previous years
        and continuing to work to bring developers from around the nation to Jackson, MS to showcase
        the city, state, and community we are building here in Mississippi.
      </p>
      <p>
        MagnoliaJS is run by native Mississippians,{" "}
        <a href="https://twitter.com/_KaylaSween" target="_blank" rel="noreferrer">
          Kayla
        </a>{" "}
        and{" "}
        <a href="https://twitter.com/_RichardSween" target="_blank" rel="noreferrer">
          Richard Sween
        </a>
        .
      </p>

      <h2>Previous Years</h2>
      <p>
        If you&apos;d like to see the talks from MagnoliaJS 2021 and 2022, check out{" "}
        <a
          href="https://www.youtube.com/channel/UCiP-LfJJjBMANN8JXySXCDA"
          target="_blank"
          rel="noreferrer"
        >
          the MagnoliaJS YouTube channel
        </a>
        !
      </p>

      <h2>Sponsorship Opportunities</h2>
      <p>
        Feel free to take a look at our{" "}
        <a
          href="https://drive.google.com/file/d/1T9lM-y1e-QgPFvGFKWd39XhDMOz5H3uM/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          sponsorship prospectus
        </a>{" "}
        to learn more about sponsorship opportunities for MagnoliaJS 2023 and please let us know if
        your company is{" "}
        <Link href="/sponsors/sponsorship-info">
          interested in sponsoring
        </Link>
        !
      </p>
    </div>
  </Layout>
)

export default Home
