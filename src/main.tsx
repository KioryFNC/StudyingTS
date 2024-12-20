import { Fragment } from 'react'
import { App } from './App'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <Fragment>
    <App />
  </Fragment>
)