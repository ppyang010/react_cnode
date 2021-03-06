var React=require('react');
var ReactDOM=require('react-dom');
var IndexApp=require('./IndexApp.js');
import { DetailApp } from './detail/DetailApp.js';
import { UserApp } from './user/UserApp.js';
import { LoginApp } from './login/LoginApp.js';
import { MsgApp } from './msg/MsgApp.js';
import { ReleaseApp } from './release/ReleaseApp.js';
import { Router, Route, hashHistory,browserHistory } from 'react-router';


var main=ReactDOM.render((
    <Router path="/" history={hashHistory}>
        <Route path="/"  component={IndexApp}/>
        <Route path="/index"  component={IndexApp}/>
        <Route path="/topic(/:topicID)" component={DetailApp}/>
        <Route path="/user(/:loginname)" component={UserApp}/>
        <Route path="/login" component={LoginApp}/>
        <Route path="/messages" component={MsgApp}/>
        <Route path="/release" component={ReleaseApp}/>
    </Router>
) ,document.getElementById('app'));
