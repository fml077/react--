import React, { Component } from 'react'
import Tabbar from '../../components/Tabbar'

class User extends Component {
  render() {
    return (
      <div className='bg-img'>
        <img src={require('../../assets/images/user.jpg')} alt=""/>
      </div>
    )
  }
}
export default Tabbar(User)
