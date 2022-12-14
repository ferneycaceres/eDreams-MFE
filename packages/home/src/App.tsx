import React from 'react'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import SearchContainer from './components/search/SearchContainer'

const generateClassname = createGenerateClassName({
  productionPrefix: 'ho',
  seed: 'ho',
})

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <ThemeProvider theme={theme}>
          <SearchContainer />
        </ThemeProvider>
      </StylesProvider>
    </div>
  )
}
