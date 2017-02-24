import React from 'react';

class Trans extends React.Component{
  constructor(){
    super();
    this.state={
      // 下来，展示
      show: true
    }
  }
  handleClick(){
    this.setState({show: !this.state.show})
  }
  render(){
    let styles = {
      top: this.state.show ? '30%' : '5%'
    }
    return(
      <div className='container' style={styles}>
        <button onClick={this.handleClick.bind(this)}>{this.state.show ? '上' : '下'}</button>
        <h1>博客标题</h1>
        <h1>博客标题</h1><hr/>
        <h1>博客标题</h1>
      </div>
    )
  }
}

export default Trans;
