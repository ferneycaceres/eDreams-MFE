import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

const mount = (el : any, { onNavigate  , defaultHistory } : any) => {
  const history = defaultHistory || createMemoryHistory()

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App  />, el)

  return {
    onParentNavigate({ pathname: nextPathname} : any) {
      const { pathname } = history.location
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    },
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_home-dev-root')

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }
