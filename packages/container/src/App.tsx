import * as React from 'react'
import { lazy, Suspense, useState, useEffect } from 'react'

import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { createBrowserHistory } from 'history'
import Header from './components/Header'
import Progress from './components/Progress'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

//const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const HomeLazy = lazy(() => import('./components/HomeApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
  seed: 'co',
})

const history = createBrowserHistory()

export default () => {
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/" component={HomeLazy} />
              </Switch>
            </Suspense>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </Router>
  )
}
