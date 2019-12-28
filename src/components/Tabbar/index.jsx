import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import '../../assets/icons/iconfont.css'

const tabbarArr = [
  {
    icon: 'icon-shouye',
    text: '首页',
    link: '/home'
  },
  {
    icon: 'icon-fenleishouye',
    text: '发现',
    link: '/find'
  },
  {
    icon: 'icon-wode',
    text: '我的',
    link: '/user'
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
    const url = window.location.href;
    return (
      <div className='tabbar-wrap'>
        <div className="tabbar-content">
          {tabbarArr.map((item, index) => (
            <Link to={item.link} className={'tabbar-item ' + (url.indexOf(item.link) > -1 ? 'active': '')} key={index}>
              <span className={'iconfont ' + item.icon}></span>
              <div className="bar-name">{item.text}</div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
