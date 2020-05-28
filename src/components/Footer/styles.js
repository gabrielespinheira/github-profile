import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: var(--lightgray);
  font-size: 16px;
  padding: 15px 10px 30px;

  a {
    display: inline-block;
    font-weight: var(--bold);
    color: var(--lightgray);
    margin-left: 5px;
  }

  @media (max-width: 780px) {
  }
`
