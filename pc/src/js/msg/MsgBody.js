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
        var result=this._fetchDate(this.props.username);
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
    }

    _fetchDate(str){
        return fetch('https://cnodejs.org/api/v1/user/'+str,{
            method:"get",
        });
    }
    render(){
        let props=this.props,
        state=this.state,
        authorBox,recentReplyBox,recentTopicBox;
        if(state.authorBoxData){
            authorBox=<Sidebox title="作者" type="author" authorBoxData={state.authorBoxData} />;
        }
        return (
            <main className="main clearfix">
                <div className="sidebar f-fr">
                    {authorBox}
                </div>

                <div className="content clearfix">
                 

                </div>
            </main>
        );
    }
}

export default MsgBody;
export {MsgBody};
