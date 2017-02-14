//消息中心页面
var React =require('react');

var Header=require('../Header.js');
var Footer=require('../Footer.js');
import {CookieUtil} from '../util/CookieUtil.js';
import {MsgBody} from './MsgBody.js';
class MsgApp extends React.Component {
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
        var state=this.state,
        body;
        console.dir(state);
        body=<MsgBody username={state.loginUserInfo.username} />
        return (
            <div>
                <Header />
                {body}
                <Footer />
            </div>
        );
    }
}
export default MsgApp;
export {MsgApp};
