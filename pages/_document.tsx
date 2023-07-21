import Document, { DocumentContext } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
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
  }
}
