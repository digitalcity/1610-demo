import React from 'react';

class TodoList extends React.Component{
  render(){
    // console.log(this.props.data);
    let list = this.props.data.map( item => <li key={Math.random()}>{item}</li> )
    return(
      <ul>
        {list}
      </ul>
    )
  }
}

export default TodoList;
