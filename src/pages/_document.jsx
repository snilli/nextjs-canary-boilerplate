import Document, {Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx)
  }

  render() {
    return (
        <Html lang='en'>
          <body>
          <Main />
          <NextScript />
          </body>
        </Html>
    )
  }
}
