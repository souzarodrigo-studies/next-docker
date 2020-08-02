import type { AppProps, NextWebVitalsMetric } from 'next/app';

/**
 *
 * @author Rodrigo Santos de Souza
 * @description Configuração base do projeto Next.JS
 *
 * @param { Component, pageProps }: AppProps
 *
 * @returns Component
 */
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

/**
 *
 * @author Rodrigo Santos de Souza
 * @description Export metricas do modulo web
 *
 * @param metric
 *
 * @tutorial https://nextjs.org/docs/advanced-features/measuring-performance
 */
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default App;
