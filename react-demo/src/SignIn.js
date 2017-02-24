import React from 'react';

class SignIn extends React.Component{
  getStyles(){
    return {float:'right'}
  }
  render(){

    return(
      <div style={this.getStyles()}>
        <input type='text' placeholder='aaa'/>
        <input type='text' placeholder='bbb'/>
        <button>Log In</button>
      </div>
    )
  }
}

export default SignIn;
