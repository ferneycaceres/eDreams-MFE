import React from 'react'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import ResultsContainer from './components/results/ResultsContainer'

const generateClassname = createGenerateClassName({
  productionPrefix: 're',
  seed: 're',
})

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <ThemeProvider theme={theme}>
          <ResultsContainer />
        </ThemeProvider>
      </StylesProvider>
    </div>
  )
}
