import React, { Component } from 'react'
import D from './D'; 
class E extends Component {
  componentDidMount() {
    console.log('我是原始生命周期D')
  }
  render() {
    return (
      <div>
        我是div元素，显示蓝色。
      </div>
    )
  }
}
export default D(E);
