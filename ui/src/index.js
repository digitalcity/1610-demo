import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
// import Material from './Material';
import Antd from './Antd';
import 'antd/dist/antd.css';
// import './main.css';

// 这里是为material-ui的使用写的，必须先有它
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

ReactDOM.render(<Antd />, document.getElementById('app'))
