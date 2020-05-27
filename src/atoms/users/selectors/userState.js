import { selector } from 'recoil'

import api from '../../../services/api'
import { github_username } from '../index'

export const userState = selector({
  key: 'userState',
  get: async ({ get }) => {
    const _user = get(github_username)

    const cachedUser = await JSON.parse(localStorage.getItem(`${_user}_user`))
    const cachedRepos = await JSON.parse(localStorage.getItem(`${_user}_repos`))

    if (cachedUser && cachedRepos) {
      return {
        success: true,
        user: cachedUser,
        repos: cachedRepos,
      }
    }

    try {
      const userInfo = await api.get(`/users/${_user}`)
      const { data: userRepos } = await api.get(
        `/users/${_user}/repos?type=owner&sort=updated`
      )

      const repos = []

      userRepos.some((repo, i) => {
        if (i > 5) return true

        console.log(repo.description)

        let description = ''

        if (typeof repo.description === 'string') {
          description =
            repo.description.length < 55
              ? repo.description
              : repo.description.substr(0, 55) + '...'
        }

        repos.push({
          id: repo.id,
          url: repo.svn_url,
          description,
          name: repo.name,
        })
      })

      localStorage.setItem(`${_user}_user`, JSON.stringify(userInfo.data))
      localStorage.setItem(`${_user}_repos`, JSON.stringify(repos))

      return {
        success: true,
        user: userInfo.data,
        repos,
      }
    } catch (err) {
      if (err.message.indexOf('404') !== -1) {
        return {
          success: false,
          message: 'Usuário não foi encontrado, tente novamente.',
        }
      }

      return {
        success: false,
        message: err.message,
      }
    }
  },
})
