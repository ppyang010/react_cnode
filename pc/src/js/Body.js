var React=require('react');
var TopicList=require('./TopicList.js');

class Body extends React.Component{
    render(){
        return(
        <main className="main clearfix">
            <div className="sidebar f-fr">
              <div className="sidebox">
                <div className="sidebox-body">
                  <p className="txt-p">CNode：Node.js专业中文社区</p>
                  <div className="tolog">
                    <p>您可以<a href>登录</a>或<a href>注册</a>,也可以</p>
                    <a className="btn-git" href="javascript:void(0);">通过 GitHub 登陆</a>
                  </div>
                </div>
              </div>
            </div>


        <div className="content clearfix">
           <div className="m-topic-warp ">
                <nav className="m-navbar ">
                  <ul className="m-nav clearfix">
                    <li className="m-nav-item active"><a href>全部</a></li>
                    <li className="m-nav-item"><a href>精华</a></li>
                  </ul>
                </nav>
            </div>
            <TopicList/>
        </div>
      </main>)
    }
}

module.exports=Body;
