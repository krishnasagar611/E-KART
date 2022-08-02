import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import EkartLayout from './EkartLayout'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <EkartLayout />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
