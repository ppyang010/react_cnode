var React=require('react');
import {Sidebox} from '../side/Sidebox.js';
import {Link,browserHistory,hashHistory } from 'react-router';
class ReleaseBody extends React.Component{
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
        self=this;
        // console.log("result="+result);
        result.then(function(res){
            // console.dir(res);
            if (res.ok) {
                res.json().then(function(obj) {
                    // 这样数据就转换成json格式的了
                    //  console.dir(obj);
                    let data=obj.data;
                    self.setState({
                        authorBoxData:data
                    })

                })
            }
        });
        // msgResult.then(function(res){
        //     if(res.ok){
        //         res.json().then(function(obj){
        //             console.dir(obj);
        //             if(obj){
        //                 self.setState({
        //                     //以被阅读的消息
        //                     oldMsgData:obj.data.has_read_messages,
        //                     //未被阅读的消息
        //                     newMsgData:obj.data.hasnot_read_messages
        //                 })
        //             }
        //         })
        //     }
        //
        // })

    }

    _fetchDate(str){
        return fetch('https://cnodejs.org/api/v1/user/'+str,{
            method:"get",
        });
    }
    _submitDate(accesstoken,title,tab,content){
        let body=`accesstoken=${accesstoken}&title=${title}&tab=${tab}&content=${content}`
        console.log(body);
        return fetch('https://cnodejs.org/api/v1/topics',{
                method:"post",
                headers: {
                 "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
            body:body
        });
    }
    handleSubmit(e){
        let accesstoken=this.props.tokenID,
        title=this.refs['title'].value,
        tab=this.refs['tab'].value,
        content=this.refs['content'].value;
        var result=this._submitDate(accesstoken,title,tab,content),
        self=this;
        result.then(function(res){
            // console.dir(res);
            if (res.ok) {
                res.json().then(function(obj) {
                    // 这样数据就转换成json格式的了
                    //  console.dir(obj);
                    if(obj.success){
                        alert('发表成功!!!!');
                        hashHistory.push('/topic/'+obj.topic_id);
                    }
                })
            }
        });
        e.preventDefault();
    }
    render(){
        let props=this.props,
        state=this.state,
        authorBox;

        // console.dir(state);


        if(state.authorBoxData){
            authorBox=<Sidebox title="作者" type="author" authorBoxData={state.authorBoxData} />;

        }

        return (
            <main className="main clearfix">
                <div className="sidebar f-fr">
                    {authorBox}
                </div>

                <div className="content clearfix">
                    <div className="sidebox">
                        <div className="sidebox-head">
                          <span>主页/发表</span>
                        </div>
                        <div className="sidebox-body">
                          <div className="sidebox-body-wrap">
                            <div className="sidebox-form-wrap">
                              <form className="sidebox-form" onSubmit={this.handleSubmit.bind(this)}>
                                  <div className="form-cell t-left">
                                      <label htmlFor="token">分类:</label>
                                      {/* <input id="token" type="text" name="" value=""> */}
                                      <select className name="tab" defaultValue="ask" ref="tab" >
                                        <option value="share">分享</option>
                                        <option value="ask" >问答</option>
                                      </select>
                                   </div>

                                    <div className="form-cell t-left"><label htmlFor="token">标题:</label><input id="token" type="text" ref="title" defaultValue={''} /></div>
                                    <div className="form-cell t-left"><textarea name="content" rows={8} cols={40} defaultValue={""}  ref="content" /></div>
                                    <div className="form-cell"><button className="btn-primary" type="submit">发表</button></div>
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
//参数验证
// ReleaseBody.prototype={
//
// }
export default ReleaseBody;
export {ReleaseBody};
