import React from 'react'

import UserList from '../../components/UsersList'
import UserInput from '../../components/UserInput'

function Home() {
  return (
    <>
      <UserInput />

      <React.Suspense fallback={<h3>Loading...</h3>}>
        <UserList />
      </React.Suspense>
    </>
  )
}

export default Home
