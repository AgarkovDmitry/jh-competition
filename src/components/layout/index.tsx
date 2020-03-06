import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'

import AppBar from './app-bar'
import Drawer from './drawer'

import useStyles from './styles'

interface IProps {
  children: any
}

function Layout({ children }: IProps) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleDrawerOpen() {
    setOpen(true)
  }

  function handleDrawerClose() {
    setOpen(false)
  }

  return (
    <div className={classes.app}>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen}/>
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <Box paddingTop={11} paddingX={3}>
        {children}
      </Box>
    </div>
  )
}

export default Layout
