import React from 'react';
import {browserHistory} from 'react-router';

class Test extends React.Component{
  handleClick(){
    browserHistory.push('/')
    // this.context.router.push('/')
  }
  render(){
    console.log(this.context.router);
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>返回首页</button>
      </div>
    )
  }
}
Test.contextTypes = {
  router: React.PropTypes.object
};
export default Test;
