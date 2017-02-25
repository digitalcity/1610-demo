import React from 'react';

import Test from './Test';

class App extends React.Component{
  componentDidMount(){
    console.log(this.refs.aaa.getValue());
  }
  render(){
    return(
      <div>
        <div ref='test' id='test'>aaa</div>
        <button id='btn1' ref='btn1' onClick={() => this.refs.aaa.handleClick()}>我是1</button>
        <button id='btn2'>我是2</button>
        <Test ref='aaa' />
      </div>
    )
  }
}

export default App;
