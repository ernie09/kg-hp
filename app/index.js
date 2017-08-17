import './less/kg.less';
// To include the default styles
import 'react-rangeslider/lib/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>,
  document.getElementById('kg-homepage')
);
