/* eslint-disable */
import 'Style/globalStyleBase.scss'
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Redirect, browserHistory, hashHistory } from 'react-router';
import RouteConfig from './router.js'


ReactDom.render(<Router history={browserHistory} routes={RouteConfig} />, document.getElementById('app'));

