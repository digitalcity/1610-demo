import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Slider from './Slider';
import './main.css'

import Img1 from './images/demo1.jpg';
import Img2 from './images/demo2.jpg';
import Img3 from './images/demo3.jpg';

let imgs = [Img1,Img2,Img3,Img1];

ReactDOM.render(<Slider imgs={imgs}/>, document.getElementById('app'))
