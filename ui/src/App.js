import React from 'react';
import TodoList from './TodoList';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      num: 0
    }
  }
  componentDidMount(){
    if (this.state.num>=95) {
      this.state.num=0;
    }
    // setInterval(() => this.setState({num:this.state.num+1}), 100);
  }
  render(){
    return(
      <div>
        {/* <TodoList /> */}
        <ProgressBar active now={this.state.num} label={`${this.state.num}%`}/>
      </div>
    )
  }
}

export default App;
