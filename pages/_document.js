import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />  
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600&family=Montserrat:wght@400;700&display=swap" rel="preload" as="style" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Montserrat:wght@400;700&display=swap" media="all" onLoad="this.media='all'"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument