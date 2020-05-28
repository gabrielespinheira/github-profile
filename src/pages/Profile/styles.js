import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 50px);

  @media (max-width: 780px) {
    height: auto;
    width: 100%;
    padding: 15px;
  }

  @media (max-height: 830px) {
    height: auto;
    padding: 15px;
    width: 100%;
  }
`
