import React from 'react';

import TodoList from './components/TodoList';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      inputValue: '',
      data: ['aaa','bbb','ccc']
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
      this.setState({ data: [...this.state.data,newItem] })
    }
    this.setState({inputValue: ''})
  }
  render(){
    let styles={
      root: {
        maxWidth: '680px',
        margin: '0 auto',
        textAlign: 'center'
      }
    }
    return(
      <div style={styles.root}>
        <h1>TODO</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' value={this.state.inputValue} onChange={this.handleInput.bind(this)}/>
          <button>ADD</button>
        </form>

        <TodoList data={this.state.data}/>

      </div>
    )
  }
}

export default App;
