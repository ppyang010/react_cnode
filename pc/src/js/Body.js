var React=require('react');
var TopicList=require('./TopicList.js');

import {Sidebox} from './side/Sidebox.js';
class Body extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            test:"ccytest"
        }
    }
    componentWillMount(){

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
    }
    _fetchDate(){
        return fetch('https://cnodejs.org/api/v1/topics?page=1',{
            method:"get",
        })

    }
    render(){
        var dataList=[];
        if(!!this.state.dataList){
            console.dir(this.state.dataList);
            dataList=this.state.dataList;
        }else{
            console.log(null);
        }
        return(
        <main className="main clearfix">
            <div className="sidebar f-fr">
              <div className="sidebox">
                <div className="sidebox-body">
                    <div className="sidebox-body-wrap">
                      <p className="txt-p">CNode：Node.js专业中文社区</p>
                      <div className="tolog">
                        <p>您可以<a href>登录</a>或<a href>注册</a>,也可以</p>
                        <a className="btn-git" href="javascript:void(0);">通过 GitHub 登陆</a>
                      </div>
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
            <TopicList dataList={dataList}/>
        </div>
      </main>
  )
    }
}

module.exports=Body;
