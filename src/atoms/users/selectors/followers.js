import { selector } from 'recoil'

import api from '../../../services/api'
import { usernamesList } from '../index'

export const followersState = selector({
  key: 'followersState',
  get: async ({ get }) => {
    const _users = get(usernamesList)

    const responses = await Promise.all(
      _users.map((username) => api.get(`/users/${username}`))
    )

    const followerMap = {}

    responses.forEach((response) => {
      const { data: user } = response

      console.log(user)

      followerMap[user.login] = user.followers
    })

    return followerMap
  },
})
