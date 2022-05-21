import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GeneralContextProvider from './contexts/GeneralContext'
import LoginContextProvider from './contexts/LoginContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GeneralContextProvider>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </GeneralContextProvider>
  </React.StrictMode>
)
