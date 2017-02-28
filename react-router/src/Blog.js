import React from 'react';

class Blog extends React.Component{
  render(){
    console.log(this.props);
    return(
      <div style={{border: '10px solid #00bcd4'}}>
        你现在访问的是：/blog/{this.props.params.title}<br />

        {
          this.props.params.title==1 ? <h1>这是第一篇文章</h1> :
          this.props.params.title==2 ? <h1>这是第2222篇文章</h1> :
          <h2>额你查看的文章不存在</h2>
        }
      </div>
    )
  }
}

export default Blog;
