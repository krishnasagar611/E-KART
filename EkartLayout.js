import React from 'react'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom'
import Product from './components/Product'
import Navbar from './components/Navbar'

function EkartLayout() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Product">
          <Product />
        </Route>
      </Switch>
    </div>
  )
}

export default EkartLayout
