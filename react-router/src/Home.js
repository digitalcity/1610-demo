import React from 'react';

import NavBar from './NavBar';

class Home extends React.Component{
  render(){
    return(
      <div style={{border: '20px solid red'}}>
        {this.props.body}

        <NavBar />
        {this.props.children}

        {this.props.main}

        页脚
      </div>
    )
  }
}

export default Home;
