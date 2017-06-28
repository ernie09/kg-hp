import 'bootstrap/less/bootstrap.less';
import './less/kg.less';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {BrowserRouter, Route} from 'react-router-dom';

// <Route path="/test" component={Test}/>

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>,
  document.getElementById('kg-homepage')
);
