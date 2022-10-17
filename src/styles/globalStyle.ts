import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { media } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html {
      width: 100%;
      max-width: 100%;
      min-height: 100vh;
      overflow-x: hidden;
  }
  body {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-x: hidden;
  }

  a {
      color: inherit;
      text-decoration: none;
  }
  
  #root {
    margin: 0 auto;
  }
  
  html {
      font-size: 16px;
      scroll-snap-type:y;
  }
  
  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: 'Pretendard-Regular';
      position: relative;
  }
  
  body, button {
    font-family: 'Pretendard-Regular';
  }
  
  button {
      cursor: pointer;
      border: none;
      outline: none;
      background-color: transparent;
      -webkit-tap-highlight-color : transparent;
  }
  
  a, a:visited {
      text-decoration: none;
      color: black;
  }
  :focus {
      outline: none;
      border: none;
  }
  ::-webkit-scrollbar {
      display: none;
  }
  .pc-tablet-only {
      display: block;
      ${media.mobile} {
          display: none;
      }
  }
  .tablet-mobile-only{
      display: none;
      ${media.tablet}{
          display:block;
      }
  }
  .mobile-only {
      display: none;
      ${media.mobile} {
          display: block;
      }
  }
  input, textarea, ::selection,
  input:focus, textarea:focus, select:focus{
      outline: none;
  }
  .container {
    padding: 0 2rem;
  }

  .main {
      min-height: 100vh;
      padding: 4rem 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .footer {
      display: flex;
      flex: 1;
      padding: 2rem 0;
      border-top: 1px solid #eaeaea;
      justify-content: center;
      align-items: center;
  }

  .footer a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
  }

  .title a {
      color: #0070f3;
      text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
      text-decoration: underline;
  }

  .title {
      margin: 0;
      line-height: 1.15;
      font-size: 4rem;
  }

  .title,
  .description {
      text-align: center;
  }

  .description {
      margin: 4rem 0;
      line-height: 1.5;
      font-size: 1.5rem;
  }

  .code {
      background: #fafafa;
      border-radius: 5px;
      padding: 0.75rem;
      font-size: 1.1rem;
      font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
        Bitstream Vera Sans Mono, Courier New, monospace;
  }

  .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 800px;
  }

  .card {
      margin: 1rem;
      padding: 1.5rem;
      text-align: left;
      color: inherit;
      text-decoration: none;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      transition: color 0.15s ease, border-color 0.15s ease;
      max-width: 300px;
  }

  .card:hover,
  .card:focus,
  .card:active {
      color: #0070f3;
      border-color: #0070f3;
  }

  .card h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
  }

    .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
    }

    .logo {
        height: 1em;
        margin-left: 0.5rem;
    }

    @media (max-width: 600px) {
        .grid {
            width: 100%;
            flex-direction: column;
        }
    }

    @font-face {
        font-family: 'MabinogiClassicR';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/MabinogiClassicR.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Medium';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-SemiBold';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-ExtraBold';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    :root {
        --vh: 100%;
    }
`;

export default GlobalStyle;