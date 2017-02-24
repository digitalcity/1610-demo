import React from 'react';

import Btn from './Btn';
import Card from './Card';

let data=[
  {index:1, title:'标题一', date: '2017.1.55'},
  {index:6, title:'标题一', date: '2017.1.7'},
  {index:4, title:'标题一aaaa', date: '2017.1.23'},
  {index:8, title:'标题一ccc', date: '2017.1.5'}
]
class App extends React.Component{
  constructor(){
    super();
    this.state={data: data, num: 0}
  }
  addNum(val){
    this.setState({num: this.state.num+val})
  }
  componentDidMount(){
    let _this = this
    setInterval(function () {
      _this.setState({num: _this.state.num+10})
    },1000)
  }
  render(){
    return(
      <div>
        {
          this.state.data.map( item => <Card key={Math.random()} {...item} /> )
        }
        数值是：{this.state.num}<br/>
        <Btn padd={20} fatherClick={this.addNum.bind(this,50)} title='加5' />
        <Btn padd={20} fatherClick={this.addNum.bind(this,-10)} title='减10'/>
      </div>
    )
  }
}

export default App;
