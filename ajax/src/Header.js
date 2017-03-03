import React from 'react';
import axios from 'axios';

class Header extends React.Component{
  constructor(){
    super();
    this.state={
      accesstoken: '',
      user: null
    }
  }
  componentWillMount(){
    this.setState({user: JSON.parse( localStorage.getItem('user') || '{}')})
  }
  handleSubmit(e){
    e.preventDefault();
    axios.post('https://cnodejs.org/api/v1/accesstoken',
      {accesstoken: this.state.accesstoken})
      .then( res => {
        this.setState({user: res.data, accesstoken: ''});
        localStorage.setItem('user',JSON.stringify(res.data))
      } )
      .catch( err => alert('登陆失败'))
  }
  handleLogout(){
    this.setState({user: {}});
    localStorage.setItem('user',JSON.stringify({}))
  }
  render(){
    return(
      <div>
        {this.state.user.id ?
          <div>
            <span>欢迎登陆：{this.state.user.loginname}</span>
            <button onClick={this.handleLogout.bind(this)}>登出</button>
          </div>
          :
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor='accesstoken'>accesstoken</label>
            <input id='accesstoken' name='accesstoken' value={this.state.accesstoken}
              onChange={ e => this.setState({accesstoken:e.target.value})}
              style={{width:'300px'}}/>
            <button type='submit'>登录</button>
          </form>
        }
      </div>
    )
  }
}

export default Header;
