import React from 'react';

import TodoList from './components/TodoList';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      inputValue: '',
      data: [
        {text:'aaaa', completed: false},
        {text:'bbbb', completed: false},
        {text:'bbbbbbb', completed: false}
      ]
    }
  }
  handleInput(e){
    this.setState({inputValue: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    let newItem = this.state.inputValue.trim();
    if (newItem.length===0) {
      alert('输入内容不能为空')
    }else {
      let newTodo = {
        text: newItem,
        completed: false
      }
      this.setState({ data: [...this.state.data,newTodo] })
    }
    this.setState({inputValue: ''})
  }
  render(){
    let styles={
      root: {
        maxWidth: '500px',
        margin: '0 auto'
      }
    }
    return(
      <div style={styles.root}>
        <h1 style={{textAlign: 'center'}}>TODO</h1>

        <form onSubmit={this.handleSubmit.bind(this)} className='form-inline'>
          <div className="form-group">
            <input type='text' value={this.state.inputValue} onChange={this.handleInput.bind(this)} className='form-control'/>
            <button className="btn btn-default">ADD</button>
          </div>
        </form>

        <TodoList data={this.state.data}/>

      </div>
    )
  }
}

export default App;
