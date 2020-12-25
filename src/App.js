import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import Auth from './pages/auth/Auth'
import { auth } from './firebase/firebase.utils'


class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.state
    
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={Auth} />
        </Switch>
      </div>
    )
  }
}

export default App
