import * as React from "react";
import { lazy, Suspense, useState, useEffect } from 'react'

import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { createBrowserHistory } from 'history'
import Header from './components/Header'
import Progress from './components/Progress'


//const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const HomeLazy = lazy(() => import('./components/HomeApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

const history = createBrowserHistory()

export default () => {
  const [isSignedIn, setIsSignIn] = useState(false)

  // useEffect(() => {
  //   if (isSignedIn) {
  //     history.push('/dashboard')
  //   }
  // }, [isSignedIn])

  return (

    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header/>
           <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/" component={HomeLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}