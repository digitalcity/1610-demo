import React from 'react';

class TodoList extends React.Component{
  render(){
    // console.log(this.props.data);
    let list = this.props.data.map( item =>
      <li key={Math.random()}>
        <input type='checkbox' className='pull-left'/>
        {item.text}
        <span className="glyphicon glyphicon-remove-circle pull-right" aria-hidden="true"></span>
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
