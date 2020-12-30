import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import Auth from './pages/auth/Auth'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshop => {

          this.setState({
            currentUser: {
              id: snapshop.id,
              ...snapshop.data()
            }
          }, () => {
            console.log(this.state)
          })
        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.state

    console.log('Render::', this.state)
    
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
