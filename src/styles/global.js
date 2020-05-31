import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;

    --body: #F5F6FA;
    --borderColor: #e6e8ef;
    --regular: 400;
    --bold: 700;
    --black: #000;
    --white: #fff;
    --font: #000;
    --card: #fff;
    --lightgray: #888888;
    --primary: #367dff;
    --primaryHover: #fff;
  }

  @media (prefers-color-scheme: dark) {
    *, *:before, *:after {
      --body: #191A21;
      --borderColor: #343746;
      --black: #fff;
      --white: #282A36;
      --font: #fff;
      --card: #282A36;
      --lightgray: #fff;
      --primary: #6FCBF0;
      --primaryHover: #343746;
    }
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body, h1, h2, h3, h4, h5, h6, p, button, input, span {
    font-family: 'Fira Sans', sans-serif;
    color: var(--font);
  }

  body {
    color: var(--font);
    background: var(--body);
    font-weight: var(--regular);
  }

  button {
    outline: none !important;
    cursor: pointer;
  }
`
