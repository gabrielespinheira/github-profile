import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 50px);
  flex-direction: column;

  .card {
    background: var(--card);
    width: 100%;
    max-width: 670px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 20px 200px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 25px;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 23px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  form {
    width: 100%;
    display: flex;
    border: 1px solid var(--borderColor);
    padding: 10px;
    border-radius: 5px;

    input[type='text'] {
      width: 100%;
      flex: 1;
      border: none;
      outline: none;
      font-size: 17px;
      font-weight: 400;
      line-height: 1;
      padding: 10px;
    }

    button {
      background: transparent;
      border: none;
      padding: 10px;
    }
  }

  @media (max-width: 780px) {
    width: 100%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 20px;
    }

    form {
      padding: 5px;
    }

    .card {
      padding: 20px;
    }
  }
`
