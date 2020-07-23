import NextDocument from 'next/document';

import React from 'react';
import { ServerStyleSheet } from 'styled-components';

import Global from '../utils/global_style';

export default class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <React.Fragment>
                <App {...props} />
                <Global />
              </React.Fragment>
            )
        });

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [...initialProps.styles, ...sheet.getStyleElement()]
      };
    } finally {
      sheet.seal();
    }
  }
}
