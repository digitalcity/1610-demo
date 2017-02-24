import React from 'react';

let data = ["加油脱单，就在今天！", "JJ太短约不到", "注定孤独一生", "看看自己的右手", "玩lol度过吧，选提莫", "吃狗粮", "守望先锋---我选半藏", "去电影院看人头", "调戏10086客服妹子", "该给女朋友充充气了", "醒醒吧，开工了，该搬砖了", "去情侣餐厅，点个单人餐慢慢吃", "首先，你要从被窝里先出来", "祝天下所有的情侣都是失散多年的兄妹", "Enjoy yourself", "把附近宾馆的大床房全包下", "今天情人节，你妈逼你相亲了么？", "去音乐餐厅点分手快乐", "当光棍节过过就算了吧", "你老公的JJ比你的都大", "我家，你家，还是如家"];

class EatWhat extends React.Component{
  constructor(){
    super();
    this.state={
      start: false,
      data,
      text: ''
    }
  }
  select(){
    let result = this.state.data[Math.floor(Math.random()*this.state.data.length)]
    this.setState({text: result})
  }
  handleClick(){
    if (this.state.start) {
      // console.log('停止');
      clearInterval(this.interval);
      this.setState({start: false})
    }else {
      // 计时器
      this.interval = setInterval(() => this.select(), 50);
      this.setState({start: true})
    }
  }
  render(){
    return(
      <div>
        <p>今天吃什么： {this.state.text}</p>
        <button onClick={this.handleClick.bind(this)}>{this.state.start ? '停止' : '开始'}</button>
      </div>
    )
  }
}

export default EatWhat;
