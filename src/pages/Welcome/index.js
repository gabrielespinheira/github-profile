import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { Container } from './styles'
import { FiSearch } from 'react-icons/fi'
import { github_username } from '../../atoms/users'

function Welcome() {
  const history = useHistory()
  const [input, setInput] = useState('')
  const [, setUsername] = useRecoilState(github_username)

  function handleChangeInput(event) {
    setInput(event.target.value.trim().toLowerCase())
  }

  function submit(event) {
    event.preventDefault()

    setUsername(input)
    if (input) history.push(input)
  }

  return (
    <Container>
      <h1>Faaaaala, dev!</h1>

      <section className="card">
        <h2>Digite um usuário do GitHub</h2>

        <form onSubmit={submit}>
          <input type="text" name="username" onChange={handleChangeInput} />

          <button type="submit" name="submit">
            <FiSearch color="#367DFF" size={24} />
          </button>
        </form>
      </section>
    </Container>
  )
}

export default Welcome
