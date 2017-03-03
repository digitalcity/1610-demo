import React from 'react';
import axios from 'axios';
import Test from './Test';

class Blog extends React.Component{
  constructor(){
    super();
    this.state={blog: {}}
  }
  componentWillMount(){
    axios.get(`https://cnodejs.org/api/v1/topic/${this.props.params.id}`)
      .then( res => this.setState({blog: res.data.data}) )
  }
  handleClick(){
    this.props.router.push('/')
  }
  render(){
    // console.log(this.state.blog);
    // console.log(this.props);
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>返回首页</button>
        <div dangerouslySetInnerHTML={{__html: this.state.blog.content}} className='blog'></div>
        <Test />
      </div>
    )
  }
}

export default Blog;
