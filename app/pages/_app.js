import { ErrorBoundary, ErrorComponent, useQueryErrorResetBoundary } from "blitz";
export default function App({
  Component,
  pageProps
}) {
  const getLayout = Component.getLayout || (page => page);

  return <ErrorBoundary FallbackComponent={RootErrorFallback} onReset={useQueryErrorResetBoundary().reset}>
      {getLayout(<Component {...pageProps} />)}
    </ErrorBoundary>;
}

function RootErrorFallback({
  error
}) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />;
}