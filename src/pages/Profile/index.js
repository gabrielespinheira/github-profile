import React, { lazy } from 'react'
import { useRecoilValue } from 'recoil'

import { Container } from './styles'
import Loading from '../../components/Loading'
import NotFound from '../../components/NotFound'
import { userState } from '../../atoms/users/selectors/userState'

const LoadUser = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../../components/User')), 1500)
  })
})

function Profile() {
  function Content() {
    const response = useRecoilValue(userState)

    if (!response.success) {
      return <NotFound message={response.message} />
    }

    return <LoadUser user={response.user} repos={response.repos} />
  }

  return (
    <Container>
      <React.Suspense fallback={<Loading />}>
        <Content />
      </React.Suspense>
    </Container>
  )
}

export default Profile
