import React, { Component } from 'react'
import A from './A'
class C extends Component {
  render() {
    return (
      <div>
        这是list组件
      </div>
    )
  }
}
export default A(C)
