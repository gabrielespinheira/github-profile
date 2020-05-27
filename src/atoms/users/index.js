import { atom } from 'recoil'

export const github_username = atom({
  key: 'github_username',
  default: window.location.pathname.substr(1),
})
