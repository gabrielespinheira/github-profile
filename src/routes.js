import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Profile from './pages/Profile'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/:username" component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}
