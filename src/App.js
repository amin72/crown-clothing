import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import Auth from './pages/auth/Auth'


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={Auth} />
      </Switch>
    </div>
  )
}

export default App
