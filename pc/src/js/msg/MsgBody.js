var React=require('react');
import {Sidebox} from '../side/Sidebox.js';
class MsgBody extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }

    }

    componentWillMount(){

    }
    componentDidMount(){
        console.log("componentDidMount");
        var result=this._fetchDate(this.props.username),
        msgResult=this._fetchMsgDate(this.props.tokenID);
        var self=this;
        // console.log("result="+result);
        result.then(function(res){
            // console.dir(res);
            if (res.ok) {
                res.json().then(function(obj) {
                    // 这样数据就转换成json格式的了
                    //  console.dir(obj);
                    if(obj.success){
                        let data=obj.data;
                        self.setState({
                            authorBoxData:data
                        })
                    }
                })
            }
        });
        msgResult.then(function(res){
            if(res.ok){
                res.json().then(function(obj){
                    console.dir(obj);
                    if(obj){
                        self.setState({
                            //以被阅读的消息
                            oldMsgData:obj.data.has_read_messages,
                            //未被阅读的消息
                            newMsgData:obj.data.hasnot_read_messages
                        })
                    }
                })
            }

        })

    }

    _fetchDate(str){
        return fetch('https://cnodejs.org/api/v1/user/'+str,{
            method:"get",
        });
    }
    _fetchMsgDate(str){
        return fetch('https://cnodejs.org/api/v1/messages?accesstoken='+str,{
            method:"get",
        });
    }
    render(){
        let props=this.props,
        state=this.state,
        authorBox,recentReplyBox,recentTopicBox,
        newMsgBox,
        oldMsgBox;
        // console.dir(state);
        if(state.authorBoxData){
            authorBox=<Sidebox title="作者" type="author" authorBoxData={state.authorBoxData} />;

        }
        if(state.oldMsgData){
            newMsgBox=<Sidebox title="未读消息" type="newMsg" boxData={state.newMsgData} />;
            oldMsgBox=<Sidebox title="已读消息" type="oldMsg" boxData={state.oldMsgData} />;
        }
        return (
            <main className="main clearfix">
                <div className="sidebar f-fr">
                    {authorBox}
                </div>

                <div className="content clearfix">
                    {newMsgBox}
                    {oldMsgBox}

                </div>
            </main>
        );
    }
}

export default MsgBody;
export {MsgBody};
