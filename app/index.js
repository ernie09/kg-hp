import './less/kg.less';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import { LocaleProvider } from 'antd';
import deDE from 'antd/lib/locale-provider/de_DE';

ReactDOM.render(
  <LocaleProvider locale={deDE}>
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  </LocaleProvider>,
  document.getElementById('kg-homepage')
);
