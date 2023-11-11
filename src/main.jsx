import React from 'react'
import ReactDOM from 'react-dom/client'
import { JournalApp } from './JournalApp.jsx'
import './style.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalApp/>
    </BrowserRouter>
  </React.StrictMode>,
)