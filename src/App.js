import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/homepage/HomePage'


const HatsPage = () => {
  return (
    <div>
      Hats Page!
    </div>
  )
}

const SneakersPage = () => {
  return (
    <div>
      Sneakers Page!
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/sneakers' component={SneakersPage} />
      </Switch>
    </div>
  )
}

export default App
