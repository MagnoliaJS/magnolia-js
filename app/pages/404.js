import { Head, ErrorComponent } from "blitz"

export default function Page404() {
  const statusCode = 404
  const title = "This page could not be found"
  return (
    <>
      <Head>
        <title>Page Not Found | MagnoliaJS</title>
      </Head>
      <ErrorComponent statusCode={statusCode} title={title} />
    </>
  )
}
