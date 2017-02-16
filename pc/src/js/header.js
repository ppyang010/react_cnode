var React=require('react');
import {IndexLink,Link} from 'react-router';
import {CookieUtil} from './util/CookieUtil.js';
class Header extends React.Component{
    constructor(props){
        super(props);
        var cookie=CookieUtil.getCookies();
        var loginUserInfo={
            loginUserState:false,
        }
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
    handleLoginout(e){
        console.log('out');
        var loginUserInfo={
            loginUserState:false,
        }
        CookieUtil.delCookie('loginname');
        CookieUtil.delCookie('tokenID');
        this.setState({
            loginUserInfo:loginUserInfo
        });
    }
    _fetchMsgNum(){
        
    }
    render(){
        var loginUserInfo=this.state.loginUserInfo,
        registLink,loginLink,msglink;

        if(loginUserInfo.loginUserState){
            msglink=(<li className="nav-item"><Link className="nav-item-a" to={'/messages'} >未读消息</Link></li>);
            registLink=( <li className="nav-item"><Link className="nav-item-a" to={'/user/'+loginUserInfo.username} >{loginUserInfo.username}</Link></li>);
            loginLink=(<li className="nav-item"><a className="nav-item-a"  href="javascript: void(0)" onClick={this.handleLoginout.bind(this)} >退出</a></li>);
        }else{
            registLink=( <li className="nav-item"><a className="nav-item-a" href="javascript: void(0)">注册</a></li>);
            loginLink=(<li className="nav-item"><Link className="nav-item-a" to="/login" >登陆</Link></li>);
        }

        return (
            <header className="header">
                <nav className="navbar">
                  <div className="container clearfix">
                    <IndexLink to="/" className="logo"><img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt /></IndexLink>
                    <form className="search-warp" action="index.html" method="post">
                      <input className="search" type="search" />
                    </form>
                    <ul className="nav f-fr">
                      <li className="nav-item"><IndexLink className="nav-item-a"  to="/">首页</IndexLink></li>
                      {msglink}
                      <li className="nav-item"><a className="nav-item-a" href="https://cnodejs.org/api" target="_blank">API</a></li>
                      <li className="nav-item"><a className="nav-item-a" href="javascript: void(0)">关于</a></li>
                      {registLink}
                      {loginLink}
                    </ul>
                  </div>
                </nav>
            </header>
        )
    }
}

module.exports=Header;
