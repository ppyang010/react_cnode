var React =require('react');
var Header=require('../Header.js');
var Footer=require('../Footer.js');

import {LoginBody} from './LoginBody.js';

class LoginApp extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <LoginBody/>
                <Footer/>
            </div>
        )
    }
}
 
export default LoginApp;
export {LoginApp};
