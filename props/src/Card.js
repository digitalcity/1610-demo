import React from 'react';

class Card extends React.Component{
  render(){
    // console.log(this.props);
    return(
      <div className='card'>
        <div className='card-index'>{this.props.index}</div>
        <div className='card-info'>
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
}

let defaultObg = {
  index: 1,
  title: '这是默认的标题',
  date: '2017.2.20'
};
Card.defaultProps = defaultObg;

export default Card;
