var React =require('react');

class LoginBody extends React.Component{
    render(){
        return (
            <main className="main clearfix">
                <div className="sidebar f-fr">
                  <div className="sidebox">
                    <div className="sidebox-head"><span>作者</span></div>
                    <div className="sidebox-body">
                      <div className="sidebox-body-wrap">
                        <div className="user-info">
                          <img className="user-big-lg" src="https://avatars.githubusercontent.com/u/985607?v=3&s=120" alt />
                          <a className="user-name link-d" href>fengmk2</a>
                        </div>
                        <p className="txt-p">积分：1000</p>
                        <i className="txt-i">“ 用户很懒什么都没有说”</i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content clearfix">
                  <div className="sidebox">
                    <div className="sidebox-head">
                      <span>主页/登录</span>
                    </div>
                    <div className="sidebox-body">
                      <div className="sidebox-body-wrap">
                        <div className="alert alert-error">
                          <a className="close" href>x</a>
                          <strong>信息不完整。</strong>
                        </div>
                        <div className="sidebox-form-wrap">
                          <form className="sidebox-form" action>
                            <div className="form-cell"><label htmlFor="token">Token:</label><input id="token" type="text" name defaultValue /></div>
                            <div className="form-cell"><button className="btn-primary" type="submit">登录</button></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
        );

    }
}

export default LoginBody;
export {LoginBody};
