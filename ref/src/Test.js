import React from 'react';

export default class Test extends React.Component{
  constructor(){
    super();
    this.state={show:true}
  }
  componentWillReceiveProps(nextProps){
    console.log('will receive props====',nextProps);
  }
  componentWillUpdate(){
    console.log('child ==== will update');
  }
  componentWillUnmount(){
    console.log('我要被销毁了');
  }
  render(){
    return(
      <div>
        我是test组件:{this.props.childNum}
      </div>
    )
  }
}
