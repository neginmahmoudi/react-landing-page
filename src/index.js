import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
            Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
          background-color: #fff;
        }
        a {
          text-decoration: none;
          color: black;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
