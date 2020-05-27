import React from 'react'
import { useRecoilValue } from 'recoil'

import { Container } from './styles'
import Loading from '../../components/Loading'
import NotFound from '../../components/NotFound'
import User from '../../components/User'
import { userState } from '../../atoms/users/selectors/userState'

function Profile() {
  function Content() {
    const response = useRecoilValue(userState)

    if (!response.success) {
      return <NotFound message={response.message} />
    }

    return <User user={response.user} repos={response.repos} />
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
