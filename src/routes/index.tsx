import React from 'react'
import { Switch } from 'react-router-dom'

import App from 'App'
import Route from './Route'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route key="/" path="/" exact component={App} />
    </Switch>
  )
}

export default Routes
