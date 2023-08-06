import { Html, Head, Main ,NextScript} from 'next/document';

export default function Document() {
  return(
  <Html lang="en">
    <Head/>
    <body>  
      <Main />
      <NextScript />
    </body>
    </Html>
  );
<<<<<<< HEAD
=======
  /* static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () => originalRenderPage();

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
      };
    } finally {
      ctx.renderPage();
    }
  } */
>>>>>>> 4a25756 (STRUCT: _document.tsx from class to function)
}

