var React=require('react');
import {IndexLink} from 'react-router';
class Header extends React.Component{
    render(){
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
                      <li className="nav-item"><a className="nav-item-a" href="javascript: void(0)">新手入门</a></li>
                      <li className="nav-item"><a className="nav-item-a" href="javascript: void(0)">API</a></li>
                      <li className="nav-item"><a className="nav-item-a" href="javascript: void(0)">关于</a></li>
                      <li className="nav-item"><a className="nav-item-a" href="javascript: void(0)">注册</a></li>
                      <li className="nav-item"><a className="nav-item-a" href="javascript: void(0)">登陆</a></li>
                    </ul>
                  </div>
                </nav>
            </header>
        )
    }
}

module.exports=Header;
