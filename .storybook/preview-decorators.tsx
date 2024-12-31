import { Theme, ThemeProvider, createTheme } from '@mui/system'
import { Decorator } from '@storybook/react'
import React from 'react'

const lightTheme: Theme = {
  ...createTheme(),
}
const darkTheme: Theme = {
  ...createTheme(),
}

export const previewDecorator: Decorator = (Story, context) => {
  const { mode } = context.globals

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = React.useMemo(() => {
    switch (mode) {
      case 'light':
        return lightTheme
      case 'dark':
        return darkTheme
      default:
        return lightTheme
    }
  }, [mode])

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}
