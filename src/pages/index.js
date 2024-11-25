import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout/Layout'
import magnoliajs2023 from '/public/MagnoliaJS2023Main.jpg'
import MichaelLiendo from '/public/liendo.png'
import BrevoEmailForm from '@/components/EmailGrab/EmailGrab'

const Home = () => (
    <Layout>
        <div className="center-text">
            <Head>
                <title>MagnoliaJS</title>
            </Head>
            <h1>MagnoliaJS will return in 2025! 👻</h1>
            <Image
                src={magnoliajs2023}
                alt="Audience at MagnoliaJS 2023"
                placeholder="blur"
                loading="lazy"
                layout="intrinsic"
            />

            <section
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'left',
                    maxWidth: '1000px',
                }}
            >
                <h2>About MagnoliaJS</h2>
                <p>
                    MagnoliaJS is a community-driven software development
                    conference for web developers in Jackson, Mississippi. Our
                    mission is to foster a vibrant and inclusive community of
                    tech enthusiasts, and to showcase the growing and thriving
                    developer talent in the heart of the Hospitality State. Now
                    in its fifth year, we are building on the success from
                    previous years and continuing to work to bring developers
                    from around the nation to Jackson, MS to showcase the city,
                    state, and community we are building here in Mississippi.
                </p>
                <p>
                    We started in 2019 as a one-day event with 150 attendees and
                    12 speakers. Since then, we have grown to a two-day event
                    with over 300 attendees and 24 speakers from all over the
                    country. We are proud to be the first and only developer
                    conference in Mississippi, and one of the few in the region.
                    Our conference features a diverse lineup of speakers,
                    covering topics such as React, Vue, Angular, Node, GraphQL,
                    TypeScript, Serverless, Accessibility, Performance, Testing,
                    and more.
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
                    who are passionate supporting the developer community in the
                    heart of the Hospitality State. We are supported by our
                    generous sponsors, who help us keep the ticket prices
                    affordable and provide scholarships for underrepresented
                    groups.
                </p>
                <p>
                    We welcome developers of all backgrounds, skill levels, and
                    interests to join us at MagnoliaJS 2023. Whether you are a
                    seasoned professional or a beginner, you will find something
                    to inspire you, challenge you, and connect you with others
                    who share your passion.
                </p>
            </section>

            <BrevoEmailForm />

            <div
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'left',
                    maxWidth: '1000px',
                }}
                className="two-column"
            >
                <div style={{ maxWidth: '475px' }}>
                    <h2>Previous Years</h2>
                    <p>
                        If you&apos;d like to see the talks from MagnoliaJS
                        2021, 2022, and 2023, check out{' '}
                        <a
                            href="https://www.youtube.com/channel/UCiP-LfJJjBMANN8JXySXCDA"
                            target="_blank"
                            rel="noreferrer"
                        >
                            the MagnoliaJS YouTube channel
                        </a>
                        !
                    </p>
                    <Image
                        src={MichaelLiendo}
                        alt="Thumbnail of Michael Liendo's talk at MagnoliaJS 2022."
                        placeholder="blur"
                        loading="lazy"
                        layout="intrinsic"
                        width={500}
                    />
                </div>
                <div style={{ maxWidth: '475px' }}>
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
                        to learn more about sponsorship opportunities for
                        MagnoliaJS 2025 and please let us know if your company
                        is{' '}
                        <Link href="/sponsors/sponsorship-info">
                            interested in sponsoring
                        </Link>
                        !
                    </p>
                </div>
            </div>
        </div>
    </Layout>
)

export default Home
