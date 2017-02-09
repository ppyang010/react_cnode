var React =require('react');
import {Sidebox} from '../side/Sidebox.js';
class LoginBody extends React.Component{
    render(){
        return (
            <main className="main clearfix">
                <div className="sidebar f-fr">
                  <div className="sidebox">
                    <div className="sidebox-head"><span>提示</span></div>
                    <div className="sidebox-body">
                      <div className="sidebox-body-wrap">
                        <p className="txt-p">使用tokenID登陆</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content clearfix">
                  <Sidebox title="登录" type="login" />
                </div>
              </main>
        );

    }
}

export default LoginBody;
export {LoginBody};
