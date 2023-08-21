import Head from "next/head"
import Layout from "../components/Layout/Layout"

const Recommendations = () => (
  <Layout>
    <div className="center-text">
      <Head>
        <title>Recommendations | MagnoliaJS</title>
      </Head>
      <h1>Jackson Recommendations</h1>
      <p>These are our personal recs for what to do, eat, where to work, etc around Jackson while you&apos;re here. For more options and thorough explanations of each place, please check out <a href="https://www.visitjackson.com/" rel="noreferrer" target="_blank">Visit Jackson&apos;s website</a>! Visit Jackson is a fantastic resource for all things Jackson.</p>

    </div>
  </Layout>
)

export default Recommendations
