var React=require('react');
var TopicList=require('./TopicList.js');

import {Sidebox} from './side/Sidebox.js';
import {CookieUtil} from './util/CookieUtil.js';
class Body extends React.Component{
    constructor(props) {
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
    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
        var result=this._fetchDate();
        var self=this;
        // console.log("result="+result);
        result.then(function(res){
            // console.dir(res);
            if (res.ok) {
                res.json().then(function(obj) {
                    // 这样数据就转换成json格式的了
                    // console.dir(obj);
                    if(obj.success){
                        self.setState({
                            dataList:obj.data
                        })
                    }
                })
            }
        });
        //判断是否登陆
        if(this.state.loginUserInfo.loginUserState){
            var userinfo=this._fetchUserInfo(this.state.loginUserInfo.username);
            userinfo.then(function(res){
                // console.dir(res);
                if (res.ok) {
                    res.json().then(function(obj) {
                        // 这样数据就转换成json格式的了
                        //  console.dir(obj);
                        if(obj.success){
                            let data=obj.data;
                            let authorBoxData={
                                avatar_url:data.avatar_url,
                                loginname:data.loginname,
                                score:data.score
                            };
                            self.setState({
                                authorBoxData:authorBoxData
                            })
                        }
                    })
                }
            });
        }

    }
    _fetchDate(){
        return fetch('https://cnodejs.org/api/v1/topics?page=1',{
            method:"get",
        })

    }
    _fetchUserInfo(str){
        return fetch('https://cnodejs.org/api/v1/user/'+str,{
            method:"get",
        })

    }
    render(){
        var dataList=[],
        authorBox;
        if(!!this.state.dataList){
            console.dir(this.state.dataList);
            dataList=this.state.dataList;
        }else{
            console.log(null);
        }
        if(this.state.authorBoxData){
            authorBox=(<Sidebox title="作者" type="author" authorBoxData={this.state.authorBoxData} isShowWriteBtn={true} />)
        }else{
            authorBox=( <div className="sidebox">
               <div className="sidebox-body">
                   <div className="sidebox-body-wrap">
                     <p className="txt-p">CNode：Node.js专业中文社区</p>
                     <div className="tolog">
                       <p>您可以<a href>登录</a>或<a href>注册</a>,也可以</p>
                       <a className="btn-git" href="javascript:void(0);">通过 GitHub 登陆</a>
                     </div>
                   </div>
               </div>
             </div>)
        }
        return(
        <main className="main clearfix">
            <div className="sidebar f-fr">
                {authorBox}
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
            <TopicList dataList={dataList}/>
        </div>
      </main>
  )
    }
}

module.exports=Body;
