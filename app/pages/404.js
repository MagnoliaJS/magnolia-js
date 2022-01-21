import { Head, ErrorComponent } from "blitz"

export default function Page404() {
  return (
    <>
      <Head>
        <title>Page Not Found | MagnoliaJS</title>
      </Head>
      <ErrorComponent statusCode={statusCode} title={title} />
    </>
  )
}
