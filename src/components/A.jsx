import React, { Component } from 'react'

export default(title) => WrappedComponent => class A extends Component {
  refc = (instance) => {
    instance.getName && alert(instance.getName());
  };  
  render() {
      // 过滤掉此非高阶组件额外的props(如这里的age, 在包装组件将不显示age), 而且不需要进行透传
      const { age, ...otherProps } = this.props
      // 将 props 注入到被包装的组件中。
      // 通常为 state 的值或者实例方法。
      const injectedProp = function somefun() { /* ……  */};

      
      // 将props传递给被包装组件
      return (
        <div className="header-container">
          <div className="header-top">
            <div style={{color: 'red'}}>{title}</div>
          </div>
          <div className="main">
            <WrappedComponent food="小鱼仔" ref={this.refc} injectedProp={injectedProp} {...otherProps} />
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
