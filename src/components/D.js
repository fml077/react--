import React, { Component } from "react";

// 代理方式的高阶组件
/* export default () => WrappedComponent => class A extends Component {
  render() {
    const { ...otherProps } = this.props;
    return <WrappedComponent {...otherProps} />
  }
} */
// 继承方式的高阶组件
/* export default () => WrappedComponent => class A extends WrappedComponent {
  render() {
    const { user, ...otherProps } = this.props;
    return super.render()
  }
} */


// 继承方式的高阶组件 示例
const modifyPropsHOC = (WrappedComponent) => class NewComponent extends WrappedComponent {
  static displayName = `NewComponent(${getDisplayName(WrappedComponent)})`
  componentDidMount() {
    console.log('我是高阶组件修改后生命周期D')
  }
  
  render() {
    const element = super.render();
    // 如果包裹组件是div元素渲染成蓝色，否则渲染成绿色
    const newStyle = {
      color: element.type === 'div' ? 'blue' : 'green'
    }
    const newProps = { ...this.props, style: newStyle }
    return React.cloneElement(element, newProps, element.props.children)
  }
}

/* function withSubscription(WrappedComponent) {
  class WithSubscription extends WrappedComponent {
    render() {
      const element = super.render();
      // 如果包裹组件是div元素渲染成蓝色，否则渲染成绿色
      const newStyle = {
        color: element.type === 'div' ? 'blue' : 'green'
      }
      const newProps = { ...this.props, style: newStyle }
      return React.cloneElement(element, newProps, element.props.children)
    }
  }
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
  return WithSubscription;
} */


function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component"
}

// export default withSubscription;

export default modifyPropsHOC;