import React from 'react';

class Btn extends React.Component{
  // handleClick(){
  //   // console.log(this.props.num);
  //   this.props.fatherClick()
  // }
  render(){
    let styles = {
      padding: `${this.props.padd}px`,
      backgroundColor: this.props.bg,
      color: 'teal',
      fontSize: '24px'
    }
    return(
      <div>
        <button style={styles} onClick={()=>this.props.fatherClick()}>{this.props.title}</button>
      </div>
    )
  }
}

Btn.defaultProps = {
  title: 'defaultTitle',
  bg: '#00bcd4',
  padd: 50
};

Btn.propTypes = {
  title: React.PropTypes.string,
  bg: React.PropTypes.string,
  padd: React.PropTypes.number,
  fatherClick: React.PropTypes.func.isRequired
};
export default Btn;
