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
        // console.dir(state);
        if(state.loginUserInfo.loginUserState){
            body=(<MsgBody username={state.loginUserInfo.username} tokenID={state.loginUserInfo.userToken} />);
        }else{
            // body=(
            //     <div class="sidebox">
            //         <div class="sidebox-head"><span>请先登陆</span></div>
            //         <div class="sidebox-body">
            //             <div class="sidebox-body-wrap">
            //                 <p class="txt-p">请先登陆</p>
            //             </div>
            //         </div>
            //     </div>
            // );

            alert('请先登陆！！然后跳转主页');
        }
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
