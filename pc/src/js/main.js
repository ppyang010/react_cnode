var React=require('react');
var ReactDOM=require('react-dom');
var IndexApp=require('./IndexApp.js');
import { DetailApp } from './detail/DetailApp.js';
import { Router, Route, hashHistory } from 'react-router';


var main=ReactDOM.render((
    <Router path="/" history={hashHistory}>
        <Route path="/"  component={IndexApp}/>
        <Route path="/topic(/:topicID)" component={DetailApp}/>
    </Router>
) ,document.getElementById('app'));
