import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

export const JournalApp = () => {
  console.log(React.version);
  return (
      <AppTheme>
        <AppRouter/>
      </AppTheme>
  )
}
