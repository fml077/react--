import React, { Component } from 'react'

export default(title) => Children => class A extends Component {
    render() {
      return (
        <div className="header-container">
          <div className="header-top">
            <div>{title}</div>
          </div>
          <div className="main">
            <Children {...this.props}></Children>
          </div>
        </div>
      )
    }
  }

// export default A;
// function A(Children) {
//   return class Header extends Component {
//     render() {
//       return (
//         <div className="header-container">
//           <div className="header-top">
//             <div>这是头部</div>
//           </div>
//           <div className="main">
//             <Children></Children>
//           </div>
//         </div>
//       )
//     }
//   }
// }

// export default A;
