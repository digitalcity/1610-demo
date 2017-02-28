import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component{
  render(){
    return(
      <div>
        <Link to='/' activeStyle={{color: 'red'}} activeClassName='cool' onlyActiveOnIndex={true}>home</Link><br/>
        <Link to='/about' activeStyle={{color: 'red'}} activeClassName='cool'>about</Link><br/>
        <Link to='/work' activeStyle={{color: 'red'}} activeClassName='cool'>work</Link>
      </div>
    )
  }
}

export default NavBar;
