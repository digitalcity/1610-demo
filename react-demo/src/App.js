import React from 'react';

import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Banner />
        <Footer />
      </div>
    )
  }
}

export default App;
