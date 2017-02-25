import React from 'react';

import Checkbox from './Checkbox';

class Form extends React.Component{
  constructor(){
    super();
    this.state={
      inputValue: '',
      textarea: '我是文本域',
      select: '3',
      radio: 'male'
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.refs.form.reset();
  }
  handleChange(e){
    // console.log(e.target.value);
    this.setState({inputValue: e.target.value})
  }
  handleTextarea(e){
    this.setState({textarea: e.target.value})
  }
  select(e){
    this.setState({select: e.target.value})
  }
  render(){
    return(
      <div>
        <form method='POST' onSubmit={this.handleSubmit.bind(this)} ref='form'>
          <input type='text' value={this.state.inputValue}
          onChange={this.handleChange.bind(this)} />
          <br/>
          <textarea value={this.state.textarea} onChange={this.handleTextarea.bind(this)}/>
          <br/>
          <select value={this.state.select} onChange={this.select.bind(this)}>
            <option value="1">1aaa</option>
            <option value="2">2aaa</option>
            <option value="3">3aaa</option>
            <option value="4">4aaa</option>
          </select>
          <br/>

          <input type="radio" name="test" value="male"  checked={this.state.radio==='male' ? true : false }
          onChange={ (e) => this.setState({radio: e.target.value}) }/>男

          <input type="radio" name="test" value="famale" checked={this.state.radio==='famale' ? true : false }
          onChange={ (e) => this.setState({radio: e.target.value}) }/>女

          <Checkbox/>
          <button>提交</button>
        </form>
      </div>
    )
  }
}

export default Form;

// value 值（输入不了了） defaultValue || onChange
// 两种：
// 1.受控表单onChange, state控制value
// 2.非受控defaultValue 不可以设置value
