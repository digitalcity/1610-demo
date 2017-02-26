import React from 'react';

import TodoList from './components/TodoList';
import TodoControl from './components/TodoControl';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      inputValue: '',
      data: [
        {text:'aaaa', completed: false, id: 1},
        {text:'bbbb', completed: true, id: 2},
        {text:'bbbbbbb', completed: false, id: 3}
      ],
      visible: 'ALL'
    }
  }
  handleInput(e){
    this.setState({inputValue: e.target.value})
  }
  handleFilter(visible){
    this.setState({visible: visible})
  }
  myFindIndex(id){
    return this.state.data.findIndex( item => item.id===id )
  }
  handleRemove(id){
    console.log(id);
    let index = this.myFindIndex(id);
    this.state.data.splice(index,1);
    this.setState({data: this.state.data});
  }
  handleCompleted(id){
    console.log(id);
    let index = this.myFindIndex(id);
    this.state.data[index].completed = !this.state.data[index].completed;
    this.setState({data: this.state.data});
  }
  handleSubmit(e){
    e.preventDefault();
    let newItem = this.state.inputValue.trim();
    if (newItem.length===0) {
      alert('输入内容不能为空')
    }else {
      let newTodo = {
        text: newItem,
        completed: false,
        id: new Date().getTime()
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
    let showData;
    switch(this.state.visible){
      case 'ACTIVE':
        showData = this.state.data.filter( item => !item.completed );
        break;
      case 'COMPLETED':
        showData = this.state.data.filter( item => item.completed );
        break;
      default:
        showData = this.state.data
    }
    return(
      <div style={styles.root}>
        <h1 style={{textAlign: 'center'}}>TODO</h1>

        <form onSubmit={this.handleSubmit.bind(this)} className='form-inline'>
          <div className="form-group">
            <input type='text' value={this.state.inputValue} onChange={this.handleInput.bind(this)} className='form-control'/>
            <button className="btn btn-default">ADD {this.state.data.length}</button>
          </div>
        </form>

        <TodoList data={showData} handleCompleted={this.handleCompleted.bind(this)} handleRemove={this.handleRemove.bind(this)}/>

        <TodoControl handleFilter={this.handleFilter.bind(this)} visible={this.state.visible}/>
      </div>
    )
  }
}

export default App;
