import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {

    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="1vj-BWIM7Q44-DS2r-c-5z1QhWBnwbKodjGeCNnQ2_0" />
          <meta name="theme-color" content="#2c74db" />
        </Head>
        <body className="scrollbar scrollbar-thumb-colorBlue scrollbar-track-gray-200 overflow-x-hidden overflow-y-auto scrollbar-hide md:scrollbar-default">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument


