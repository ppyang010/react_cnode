/**
 * 作者用户信息box
 * @type {[type]}
 */
var React=require('react');
var fetch=require('isomorphic-fetch');
import {Link,browserHistory,hashHistory } from 'react-router';
import {CookieUtil} from '../util/CookieUtil.js'
//cd31693b-a3c0-4324-8c2f-f194336fd661
class LoginFormBox extends React.Component{
    handleSubmit(e){
        let tokenID=this.refs['tokenID'].value;
        var result=this._fetchDate(tokenID)
        result.then(function(res){
            if(res.ok){
                res.json().then(function(obj){
                    if(obj.success){
                        let loginname=obj.loginname;
                        console.log(loginname);
                        console.dir(hashHistory);
                        console.dir(browserHistory);
                        CookieUtil.setCookie('loginname',loginname,1);
                        CookieUtil.setCookie('tokenID',tokenID,1);
                        console.log(CookieUtil.getCookies());
                        const path='/index';
                        hashHistory.push(path);
                    }
                });
            }

        });
        e.preventDefault();
    }
    _fetchDate(str){
        return fetch('https://cnodejs.org/api/v1/accesstoken',{
            method:"post",
            headers: {
             "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
           },
            body:"accesstoken="+str
        })

    }
    render(){
        return (
            <div className="sidebox-body-wrap">
              <div className="alert alert-error">
                <a className="close" href>x</a>
                <strong>信息不完整。</strong>
              </div>
              <div className="sidebox-form-wrap">
                <form className="sidebox-form"  onSubmit={this.handleSubmit.bind(this)} >
                  <div className="form-cell"><label htmlFor="token">Token:</label><input id="token" type="text" ref="tokenID" name="tokenID"   /></div>
                  <div className="form-cell">
                    <button className="btn-primary" type="submit">登录</button>
                  </div>
                </form>
              </div>
            </div>
        );
    }
}

export default LoginFormBox;
export {LoginFormBox};
