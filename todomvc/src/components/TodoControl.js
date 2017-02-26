import React from 'react';

class TodoControl extends React.Component{
  constructor(){
    super();
    this.state={
      btns: ['ALL', 'ACTIVE', 'COMPLETED']
    }
  }
  render(){
    return(
      <div>
        分类：
        {this.state.btns.map(
          item => <button onClick={()=> this.props.handleFilter(item)} key={Math.random()} className={this.props.visible==item? 'btn btn-primary' : 'btn btn-default'}>{item}</button>
        )}
      </div>
    )
  }
}

export default TodoControl;
