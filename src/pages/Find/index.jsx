import React, { Component } from 'react'
import Tabbar from '../../components/Tabbar'

class Find extends Component {
  render() {
    return (
      <div className='bg-img'>
        <img src={require('../../assets/images/find.jpg')} />
      </div>
    )
  }
}

export default Tabbar(Find)
