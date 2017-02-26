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
        <form>
          <input type='text' value={this.state.inputValue} onChange={this.handleInput.bind(this)}/>
          <button>ADD</button>
        </form>

        <TodoList data={this.state.data}/>

      </div>
    )
  }
}

export default App;
