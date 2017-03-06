import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Phone from 'material-ui/svg-icons/communication/call';
import TimePicker from 'material-ui/TimePicker';
class Material extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
        <div className='aaa'>
          <RaisedButton label="Primary"/>
          <ActionHome />
          <Phone color='#00bcd4'/>
          <TimePicker hintText="12hr Format" />
          <TimePicker format="24hr" hintText="24hr Format" />
        </div>
    </MuiThemeProvider>
    )
  }
}

export default Material;
