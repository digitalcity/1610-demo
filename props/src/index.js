import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './main.css'
//
// class Test extends React.Component{
//   handleClick(){
//     console.log('aaaa');
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={() => console.log('aaa')}>CLICK</button>
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'));
