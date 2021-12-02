import { ErrorBoundary, ErrorComponent, useQueryErrorResetBoundary } from "blitz"
import "tailwindcss/tailwind.css"

import Layout from "../components/Layout"


export default function App({
  Component,
  pageProps
}) {
  const getLayout = Component.getLayout || (page => page);

  return <ErrorBoundary FallbackComponent={RootErrorFallback} onReset={useQueryErrorResetBoundary().reset}>
    <Layout>
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  </ErrorBoundary>;
}

function RootErrorFallback({
  error
}) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />;
}
