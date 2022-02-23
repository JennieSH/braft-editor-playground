import '../styles/globals.css'
import 'braft-editor/dist/index.css'
import '../styles/editor.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>Braft Editor</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
