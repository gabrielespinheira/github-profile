import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

import { usernamesList } from '../../atoms/users'

function UserInput() {
  const [input, setInput] = useState('')
  const [usernames, setUsernames] = useRecoilState(usernamesList)

  function onChange(event) {
    setInput(event.target.value.trim())
  }

  function submit(e) {
    e.preventDefault()

    setUsernames([...usernames, input])
    setInput('')
  }

  return (
    <form onSubmit={submit}>
      <input type="text" value={input} onChange={onChange} />

      <input type="submit" onClick={submit} value="Add github user" />
    </form>
  )
}

export default UserInput
