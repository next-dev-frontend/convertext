import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {

    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="rRKlKFWnlhU_kUGxe4fgENDoEIIcYSSc1DbdpRMn1kY" />
          <meta name="theme-color" content="#2c74db" />
        </Head>
        <body className="scrollbar scrollbar-thumb-colorBlue scrollbar-track-gray-200 overflow-x-hidden overflow-y-auto scrollbar-hide md:scrollbar-default">
          <Main />
          <NextScript />
          <script
            data-ad-client="ca-pub-4253472436511726"
            defer
            src="
            https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument


