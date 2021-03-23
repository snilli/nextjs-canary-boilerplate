import React from 'react'
import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx)
  }

  render() {
    return (
        <Html lang='en'>
          <Head>
            <meta
                name='viewport'
                content='minimum-scale=1, initial-scale=1, width=device-width'
            />
            <title>Me site</title>
          </Head>
          <body>
          <Main />
          <NextScript />
          </body>
        </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
// MyDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
//   return await Document.getInitialProps(ctx)
// }
