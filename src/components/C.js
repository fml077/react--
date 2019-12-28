import React, { Component } from 'react'
import A from './A'
class C extends Component {
  getName() {
    return "我是C组件来自喵星人家族。"
  }
  render() {
    return (
      <div>
        <input type='text' {...this.props}/>
        <br />
        这是C组件
        <br />
        姓名：{ this.props.name }
        <br />
        年龄：{ this.props.age }
        <br />
        爱好：{ this.props.food }
        <br />
        <img style={{width: 200}} src={require('../assets/images/mm.jpeg')}></img>
      </div>
    )
  }
}
export default A('喵星人家族')(C)
