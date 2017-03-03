import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      data: [],
      show: false
    }
  }
  componentDidMount(){
    // 1.axios
    axios.get('https://cnodejs.org/api/v1/topics')
      .then( res => this.setState({data: res.data.data,show: true}) )
  }
  render(){
    // console.log(this.state.data);
    let blogs = this.state.data.map( item =>
      <div key={item.id}>
        <img src={item.author.avatar_url} />
        <Link to={`blog/${item.id}`} >{item.title}</Link>
        <span>浏览量：{item.visit_count}</span>
      </div>
    )
    return(
      <div>
        {this.state.show ? blogs : '正在加载数据'}
      </div>
    )
  }
}

export default App;
