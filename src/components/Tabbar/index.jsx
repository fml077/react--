import React, { Component } from 'react'
import './index.css'
import '../../assets/icons/iconfont.css'

const tabbarArr = [
  {
    icon: 'icon-shouye',
    text: '首页'
  },
  {
    icon: 'icon-fenleishouye',
    text: '发现'
  },
  {
    icon: 'icon-wode',
    text: '我的'
  },
]
export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  onChange = (i) => {
    this.setState({
      index: i
    })
  }
  render() {
    return (
      <div className='tabbar-wrap'>
        <div className="tabbar-content">
          {tabbarArr.map((item, index) => (
            <div className={'tabbar-item ' + (this.state.index === index ? 'active': '')} key={index} onClick={() => {this.onChange(index)}}>
              <span className={'iconfont ' + item.icon}></span>
              <div className="bar-name">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
