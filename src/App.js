import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Collection, Episode} from './views'

export const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Collection}/>
      <Route exact path='/episode' component={Episode}/>
      <Redirect to='/'/>
    </Switch>
  )
}
