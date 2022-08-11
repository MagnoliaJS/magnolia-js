import { ErrorBoundary, ErrorComponent, Head, useQueryErrorResetBoundary } from "blitz"
import "../styles/styles.css"

import Layout from "../components/Layout"

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error }) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
}
