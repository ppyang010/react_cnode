var React=require('react');

import {Sidebox} from '../side/Sidebox.js';

class UserBody extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        console.log("componentDidMount");
        var result=this._fetchDate(this.props.loginname);
        var self=this;
        // console.log("result="+result);
        result.then(function(res){
            // console.dir(res);
            if (res.ok) {
                res.json().then(function(obj) {
                    // 这样数据就转换成json格式的了
                    console.dir(obj);
                    if(obj.success){
                        let data=obj.data;
                        self.setState({
                            //用户数据
                            authorBoxData:data
                        })
                    }
                })
            }
        });
    }

    _fetchDate(str){
        return fetch('https://cnodejs.org/api/v1/user/'+str,{
            method:"get",
        })

    }
    render(){
        let props=this.props,
        state=this.state,
        authorBox;
        if(state.authorBoxData){
            authorBox=<Sidebox title="作者" type="author" authorBoxData={state.authorBoxData} />;
        }

        return(
            <main className="main clearfix">
                <div className="sidebar f-fr">
                    {authorBox}
                </div>

                <div className="content clearfix">
                  {authorBox}

                  <div className="sidebox">
                    <div className="sidebox-head"><span>作者</span></div>
                    <div className="sidebox-body">
                      <div className="m-topic-content">
                        <ul className="topic-list">
                          <li className="list-item line-top">
                            <div className="item-rg f-fr">
                              <a href><img className="user-small-lg" src="https://avatars.githubusercontent.com/u/8315732?v=3&s=120" alt />
                                <span className="last-reply-time">30分钟前</span></a>
                            </div>
                            <div className="item-warp ">
                              <a href><img className="topic-author" src="https://avatars.githubusercontent.com/u/4279697?v=3&s=120" alt="alt" title="title" /></a>
                              <div className="topic-count clearfix">
                                <span className="count-of-replies">187</span>
                                <span className="count-seperator">/</span>
                                <span className="count-of-visits">44292</span>
                              </div>
                              <div className="topic-title-warp">
                                <span className="topic-type put-top">置顶</span>
                                <a className="topic-title" href title="《一起学 Node.js》彻底重写完毕">《一起学 Node.js》彻底重写完毕</a>
                              </div>
                            </div>
                          </li>
                          <li className="list-item line-top">
                            <div className="item-rg f-fr">
                              <a href><img className="user-small-lg" src="https://avatars.githubusercontent.com/u/8315732?v=3&s=120" alt />
                                <span className="last-reply-time">30分钟前</span></a>
                            </div>
                            <div className="item-warp clearfix">
                              <a href><img className="topic-author" src="https://avatars.githubusercontent.com/u/4279697?v=3&s=120" alt="alt" title="title" /></a>
                              <div className="topic-count">
                                <span className="count-of-replies">187</span>
                                <span className="count-seperator">/</span>
                                <span className="count-of-visits">44292</span>
                              </div>
                              <div className="topic-title-warp">
                                <span className="topic-type ">问答</span>
                                <a className="topic-title" href title="《一起学 Node.js》彻底重写完毕">《一起学 Node.js》彻底重写完毕</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </main>

        )
    }
}

export {UserBody};
export default UserBody;
