import React, { Component } from 'react'
import A from './A'
class B extends Component {
  render() {
    return (
      <div>
        这是B组件
      </div>
    )
  }
}

export default A('提示')(B)
