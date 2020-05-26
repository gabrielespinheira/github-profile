import React from 'react'
import { useRecoilValue } from 'recoil'

import { usernamesList } from '../../atoms/users'
import { followersState } from '../../atoms/users/selectors/followers'

export default function UsersList() {
  const usernames = useRecoilValue(usernamesList)
  const followersMap = useRecoilValue(followersState)

  return (
    <ul>
      {usernames.map((username) => (
        <li key={username}>
          {username} ({followersMap[username]})
        </li>
      ))}
    </ul>
  )
}
