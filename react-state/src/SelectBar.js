import React from 'react';

import Tab1 from './Tab1';
import Tab2 from './Tab2';

class SelectBar extends React.Component{
  constructor(){
    super();
    this.state = {show: 0}
  }
  handleClick(num){
    console.log(num);
    this.setState({show: num})
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick.bind(this,0)}>选项卡一</button>
        <button onClick={this.handleClick.bind(this,1)}>选项卡二</button>
        <button onClick={this.handleClick.bind(this,2)}>选项卡三</button>
        {this.state.show===0 ? <Tab1 /> :
          this.state.show===1 ? <Tab2 /> : "选项卡三"
        }
      </div>
    )
  }
}

export default SelectBar;
