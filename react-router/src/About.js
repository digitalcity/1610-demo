import React from 'react';
import NavBar from './NavBar';

class About extends React.Component{
  render(){
    return(
      <div style={{border: '20px solid #000'}}>
        about页面<br/>
        {this.props.children}
      </div>
    )
  }
}

export default About;
