import React from 'react'
import { Route as ReactRouterDOMRoute, RouteProps as ReactRouterDOMRouteProps, Redirect } from 'react-router-dom'

import { useAppSelector } from 'store/hooks'
import { selectUser } from 'store/features/user'

interface RouteProps extends ReactRouterDOMRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const user = useAppSelector(selectUser)

  return (
    <ReactRouterDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }}
    />
  )
}

export default Route
