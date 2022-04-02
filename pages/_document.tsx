/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html lang='es-CO'>
      <Head>
        {/* Site info */}
        <meta name='author' content='La Linda Novia' />
        <meta
          name='description'
          content='Vestidos de novia, primera comunión, quince años, bautizo, niños y niñas, confeccionamos sobre medidas, somos fabricantes, alquiler y venta.'
        />
        <link rel='canonical' href='https://lalindanovia.com' />

        {/* Favicon */}
        <link rel='apple-touch-icon' sizes='180x180' href='/img/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/img/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/img/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/img/favicon/site.webmanifest' />
        <link rel='mask-icon' href='/img/favicon/safari-pinned-tab.svg' color='#ea8bbd' />
        <link rel='shortcut icon' href='/img/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-config' content='/img/favicon/browserconfig.xml' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = Document.getInitialProps;

// MyDocument.renderDocument = Document.renderDocument;

export default MyDocument;
