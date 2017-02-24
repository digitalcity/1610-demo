import React from 'react';

let data = [
  '这是第一条消息',
  '这是第二条消息',
  'hello world',
  '这是第四条消息'
]

class App extends React.Component{
  constructor(){
    super();
    this.state={
      text: data
    }
  }
  render(){
    let content = this.state.text.map(
      (item,index) => <div key={index}>
        <p>今天的消息是：{item}</p>
        <button>删除</button>
      </div>
    )
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default App;
// 定义state
// constructor(){
//   super();
//   this.state = {
//     num: 0
//   }
// }
// 修改state
// this.setState({})
