import React, { Component } from 'react'
import A from './A'
class B extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.inputValue} onChange={this.inputChange} />
        <br />
        这是B组件,
        <br />
        姓名：{ this.props.name }
        <br />
        年龄：{ this.props.age }
        <br />
        <img style={{width: 200}} src={require('../assets/images/jj2.jpeg')}></img>
      </div>
    )
  }
}

export default A('小黄鸡家族')(B)
