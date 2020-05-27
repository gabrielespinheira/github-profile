import React from 'react'
import { RecoilRoot } from 'recoil'

import Routes from './routes'
import GlobalStyle from './styles/global'
import Footer from './components/Footer'

function App() {
  return (
    <RecoilRoot>
      <Routes />

      <Footer />
      <GlobalStyle />
    </RecoilRoot>
  )
}

export default App
