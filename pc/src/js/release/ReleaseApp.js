//发表新话题页
//

var React=require('react');

var Header=require('../Header.js');
var Footer=require('../Footer.js');
import {CookieUtil} from '../util/CookieUtil.js';
import {ReleaseBody} from './ReleaseBody.js';
import {Link,browserHistory,hashHistory } from 'react-router';
class ReleaseApp extends React.Component{
    constructor(props) {
        super(props);
        var cookie=CookieUtil.getCookies();
        var loginUserInfo={
            loginUserState:false,
        }
        var self=this;
        console.log(1)
        if(cookie['loginname']){
            loginUserInfo={
                //用户登陆状态
                loginUserState:true,
                //登陆名
                username:cookie['loginname'],
                userToken:cookie['tokenID']
            }
        }
        this.state={
            loginUserInfo:loginUserInfo
        }
    }

    render(){
        if(!this.state.loginUserInfo.loginUserState){
            return(
                <div>
                {
                    (function(){
                        alert('请先登陆');
                        hashHistory.push('/');
                    })()
                }
                </div>
            )
        }

        return (
            <div>
                <Header />
                <ReleaseBody username={this.state.loginUserInfo.username} tokenID={this.state.loginUserInfo.userToken} />
                <Footer />
            </div>
        );
    }
}
export default ReleaseApp;
export {ReleaseApp};
