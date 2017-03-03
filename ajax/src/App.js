import React from 'react';

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
    // axios.get('https://cnodejs.org/api/v1/topics')
    //   .then( res => this.setState({data: res.data.data}) )
    // 2.fetch
    fetch('https://cnodejs.org/api/v1/topics')
      .then( res => res.json() )
      .then( json => this.setState({data: json.data, show: true}) )
  }
  render(){
    // console.log(this.state.data);
    let blogs = this.state.data.map( item =>
      <div key={item.id}>
        <img src={item.author.avatar_url} />
        <a href={`https://cnodejs.org/topic/${item.id}`} target='_blank'>{item.title}</a>
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
