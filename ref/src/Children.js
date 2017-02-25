import React from 'react';

import Son from './Son';
import Test from './Test';

class Children extends React.Component{
  render(){
    return(
      <div>
        aaa
        <Son name='aa'>
          <Test />
          <Test />
        </Son>
      </div>
    )
  }
}

export default Children;
