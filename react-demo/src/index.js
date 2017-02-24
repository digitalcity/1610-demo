import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './main.css';

ReactDOM.render(
  <App />
  ,document.getElementById('app')
)


// JSX 语法，允许我们在js里直接去写标签。
// 其他的特点
// 1.每个标签必须关闭
// 2.Adjacent JSX elements must be wrapped in an enclosing tag
// 3.注释的写法 {/* comments */}
// 4.我们可以在jsx元素内嵌入变量 {obg}
// 5.class 写为 className,tabindex 为 tabIndex, for 写为 htmlFor
// 6.JSX 语法会被编译，通过React.createElement()这个方法

// 组件component(3种方式) 首字母大写,自定义标签，可以包含一系列标签
// 1.var Hello = React.createClass({}) es5写法，不用
// 2.function Hello(){
      // return(<h1>aaa</h1>)
    // }  使用时 <Hello /> //dom结构的组合常用
// 3.class
