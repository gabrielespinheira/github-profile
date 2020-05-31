import styled from 'styled-components'

export const Font = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  width: 100%;
  z-index: -2;
  font-size: 12vw;
  font-weight: var(--bold);
  color: #f5f6fa;
  text-align: center;
  text-shadow: 0 -10px 100px rgba(0, 0, 0, 0.1);
  transform: translateX(-50%);

  @media (prefers-color-scheme: dark) {
    background: -webkit-linear-gradient(#282a36, #1c1d25);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1200px) {
    font-size: 13vw;
    top: 3vw;
  }

  @media (max-width: 990px) {
    top: 4vw;
  }

  @media (max-width: 780px) {
    position: relative;
    left: initial;
    transform: initial;
    text-shadow: 0 -15px 100px rgba(0, 0, 0, 0.13);
  }

  @media (max-width: 650px) {
    display: none;
  }
`
