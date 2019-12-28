import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import Router from './router'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router></Router>
        {/* <Tabbar /> */}
      </div>
    )
  }
}
