import Head from "next/head"
import ErrorComponent from "next/error"
import Layout from "../components/Layout/Layout"

export default function Page404() {
  const statusCode = 404
  const title = "This page could not be found"
  return (
    <Layout>
      <Head>
        <title>Page Not Found | MagnoliaJS</title>
      </Head>
      <ErrorComponent statusCode={statusCode} title={title} />
    </Layout>
  )
}
