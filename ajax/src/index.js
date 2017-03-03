import React from 'react';
import ReactDOM from 'react-dom';

import Routers from './routes';
import './main.css';

ReactDOM.render(<Routers />, document.getElementById('app'))

// class Grandp extends React.Component {
//   getChildContext() {
//     return {
//       name: 12
//     };
//   }
//   render(){
//     return (
//       <div>爷爷辈
//         <Father/>
//       </div>
//     )
//   }
// }
// Grandp.childContextTypes = {
//   name: React.PropTypes.number
// };
//
//
// class Father extends React.Component {
//   render(){
//     return (
//       <div>爸爸辈
//         <Son/>
//       </div>
//     )
//   }
// }
//
// class Son extends React.Component {
//   render(){
//     return (
//       <div>儿子辈
//         {this.context.name}
//       </div>
//     )
//   }
// }
// Son.contextTypes = {
//   name: React.PropTypes.number
// };

// 获取未知图片的属性
// function getStyle(obg,attr) {
//   if (obg.currentStyle) { // IE
//     return obg.currentStyle[attr];
//   }else{
//     return getComputedStyle(obg,false)[attr];
//   }
// }
// var img = new Image();
// img.addEventListener('load', function() {
//   document.body.appendChild(img);
//   console.log(getStyle(img,'height'));
//   document.body.removeChild(img);
// }, false);
// img.src='http://7xopqp.com1.z0.glb.clouddn.com/avater.jpg';
