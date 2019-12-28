import React, { Component } from 'react'
import Tabbar from '../../components/Tabbar'

class Home extends Component {
  render() {
    return (
      <div className='bg-img'>
        <img src={require('../../assets/images/home.jpg')} alt=""/>
        <img src={require('../../assets/images/home.jpg')} alt=""/>
      </div>
    )
  }
}

export default Tabbar(Home)