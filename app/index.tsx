import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter, Route} from 'react-router-dom';

import './less/kg.less';
// To include the default styles
import 'react-rangeslider/lib/index.css';

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={App}/>
  </HashRouter>,
  document.getElementById('kg-homepage')
);
