import React from 'react';

class TodoList extends React.Component{
  render(){
    // console.log(this.props.data);
    let list = this.props.data.map( item =>
      <li key={Math.random()}>
        <input type='checkbox' />
        {item}
        <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
      </li>
    )
    return(
      <ul>
        {list}
      </ul>
    )
  }
}

export default TodoList;
