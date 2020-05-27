import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;

    --borderColor: #e6e8ef;
    --regular: 400;
    --bold: 700;
    --black: #000;
    --white: #fff;
    --lightgray: #888888;
    --primary: #367dff;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body, h1, h2, h3, h4, h5, h6, p, button, input, span {
    font-family: 'Fira Sans', sans-serif;
  }

  body {
    color: #000;
    background: #F5F6FA;
    font-weight: 400;
  }

  button {
    outline: none !important;
    cursor: pointer;
  }
`
