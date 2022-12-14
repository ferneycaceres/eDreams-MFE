import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import SearchForm from './SearchForm'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`search-tabpanel-${index}`}
      aria-labelledby={`search-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `search-tab-${index}`,
    'aria-controls': `search-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function SearchTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="search tab"
          textColor="secondary"
        >
          <Tab label="Vuelos" icon={<FlightTakeoffIcon />} {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SearchForm />
      </TabPanel>
    </div>
  )
}
