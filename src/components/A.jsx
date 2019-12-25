import React, { Component } from 'react'

function A(Children) {
  return class Header extends Component {
    render() {
      return (
        <div className="header-container">
          <div className="header-top">
            <div>这是头部</div>
          </div>
          <div className="main">
            <Children></Children>
          </div>
        </div>
      )
    }
  }
}

export default A;
