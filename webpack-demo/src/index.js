// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
//
// Point.prototype.name = 'aaa';
//
// Point.prototype.toString = function () {
//   return `(${this.x},${this.y})`;
// };
//
// function Hello() { }
// Hello.prototype.toString = function () {
//   return 'hello say';
// }
//
// Hello.prototype = new Point(8,5);
//
// var p = new Hello();

// class Point {
//   constructor(x,y) {
//     console.log('我是自动执行的');
//     this.x = x;
//     this.y = y;
//   }
//   toString(c,d) {
//     console.log(c,d);
//     return this.x
//   }
// }
//
// class Hello extends Point {
//   constructor(x,y,c){
//     super(x,y);
//     this.c = c;
//   }
//   say() {
//     return this.x
//   }
// }
//
// var p = new Hello(5,6,7);
//
// console.log(p.toString());
// console.log(p.x,p.y,p.c);

// import {a,Father,aa} from './demo'; // 引入命名导出变量
// import demo from './demo'; // 引入默认导出变量
//
// console.log(demo);
//
// class Son extends Father {
//   render(){
//     return(`
//       <li>14354654</li>
//     `)
//   }
// }
//
// document.getElementById('app').innerHTML = new Son()._render();
