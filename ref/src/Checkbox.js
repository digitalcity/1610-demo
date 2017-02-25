import React from 'react';

class Checkbox extends React.Component{
  constructor(){
    super();
    this.state={
      checkboxValue: ['apple']
    }
  }
  handleChange(e){
    let ckValue = this.state.checkboxValue;
    let nowCheck = e.target.value;

    let index = ckValue.findIndex(element=> element === nowCheck);
    // let index = ckValue.indexOf(nowCheck);
    if ( index=== -1 ) {
      ckValue.push(nowCheck);
    }else {
      ckValue.splice(index,1)
    }
    this.setState({checkboxValue:ckValue})
  }
  render(){
    console.log(this.state.checkboxValue);
    return(
      <div>
        <input type='checkbox' value='apple' name='fruits' defaultChecked onChange={this.handleChange.bind(this)}/> 苹果
        <input type='checkbox' value='banana' name='fruits' onChange={this.handleChange.bind(this)}/> 香蕉
        <input type='checkbox' value='pear' name='fruits' onChange={this.handleChange.bind(this)}/> 梨子
      </div>
    )
  }
}

export default Checkbox;
