import React from 'react';
import DatePicker from 'antd/lib/date-picker'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import BackTop from 'antd/lib/back-top';
import Progress from 'antd/lib/progress';
import Carousel from 'antd/lib/carousel';
import message from 'antd/lib/message';

import Login from './Form';

class Antd extends React.Component{
  componentDidMount(){
    message.info('组件加载完毕')
  }
  render(){
    return(
      <div>
        <DatePicker />
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8} offset={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6} offset={6}>col-6 col-offset-6</Col>
          <Col span={6} offset={6}>col-6 col-offset-6</Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>col-12 col-offset-6</Col>
        </Row>
        <Carousel autoplay>
          <div><h1>1</h1></div>
          <div><h1>2</h1></div>
          <div><h1>3</h1></div>
          <div><h1>4</h1></div>
        </Carousel>
        <Progress type="circle" percent={75} />
        <Login />
        <div style={{height: '200vh'}}></div>
        <BackTop />
      </div>
    )
  }
}

export default Antd;
