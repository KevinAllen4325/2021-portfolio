import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-117107118-1"
          /> */}

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-117107118-1', { page_path: window.location.pathname });
              `,
            }}
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600&family=Montserrat:wght@400;700&display=swap" rel="preload" as="stylesheet" />

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