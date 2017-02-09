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
        authorBox,recentReplyBox,recentTopicBox;
        if(state.authorBoxData){
            authorBox=<Sidebox title="作者" type="author" authorBoxData={state.authorBoxData} />;
            recentReplyBox=<Sidebox title="最近参与的话题" type="list" boxData={state.authorBoxData.recent_replies} />;
            recentTopicBox=<Sidebox title="最近创建的话题" type="list" boxData={state.authorBoxData.recent_topics} />;
        }

        return(
            <main className="main clearfix">
                <div className="sidebar f-fr">
                    {authorBox}
                </div>

                <div className="content clearfix">
                  {authorBox}
                  {recentTopicBox}
                  {recentReplyBox}

                </div>
              </main>

        )
    }
}

export {UserBody};
export default UserBody;
