import React from 'react'

import { Container } from './styles'

function NotFound({ message }) {
  return (
    <Container>
      <h1>{message}</h1>

      <img
        src="https://media3.giphy.com/media/9J7tdYltWyXIY/giphy.gif?cid=ecf05e471a6668468875fa8ea285eb37750272f87f8fa009&rid=giphy.gif"
        alt="Error"
      />
    </Container>
  )
}

export default NotFound
