import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/logo.svg" />
          <meta
            name="description"
            content="Galeria de imagens,AL."
          />
          <meta property="og:site_name" content="Galeria de imagens,AL." />
          <meta
            property="og:description"
            content="Galeria de imagens,AL."
          />
          <meta property="og:title" content="Galeria de imagens,AL." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Galeria de imagens,AL." />
          <meta
            name="twitter:description"
            content="Galeria de imagens,AL."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
