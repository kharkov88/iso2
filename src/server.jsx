import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express  from 'express';

import App from 'components/App';

const app = express();

app.use((req, res) => {
  const componentHTML = ReactDOMServer.renderToString(<App />);

  return res.end(renderHTML(componentHTML));
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:3090' : '/';

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello React</title>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
      </head>
      <body>
        <div id="root">
          ${ omponentHTML }
        </div>
        <script type="application/javascript" src="${assetUrl}/static/js/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
