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
//   constructor() {
//     console.log('我是自动执行的');
//     this.x = '我是x';
//     this.y = '我是y';
//   }
//   toString(c,d) {
//     console.log(c,d);
//     return 'point tostring'
//   }
// }
//
// class Hello extends Point {
//   constructor(c){
//     super();
//     this.c = c;
//   }
//   say() {
//     return this.x
//   }
// }
//
// var p = new Hello(5);
//
// // console.log(p.toString(5,6));
// console.log(p.say());

//
import {a,Father,aa} from './demo';
console.log(a);
console.log(aa(6));

class Son extends Father {
  render(){
    return(`
      <li>14354654</li>
    `)
  }
}

document.getElementById('app').innerHTML = new Son()._render();
