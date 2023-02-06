import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/App'

import { globalStyles } from '@/styles/global'
import { ActivityContextProvider } from './contexts/ActivityContext'

globalStyles()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ActivityContextProvider>
      <App />
    </ActivityContextProvider>
  </React.StrictMode>,
)
