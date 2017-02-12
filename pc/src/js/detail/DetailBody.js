var React=require('react');
import {Sidebox} from '../side/Sidebox.js';
import {DetailContent} from './DetailContent.js';
import {CookieUtil} from '../util/CookieUtil.js';
var fetch=require('isomorphic-fetch');
class DetailBody extends  React.Component{
    constructor(props){
        super(props);
        this.state={

        }

    }

    componentWillMount(){

    }
    componentDidMount(){
        console.log("componentDidMount");
        var result=this._fetchDate(this.props.data.author.loginname);
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
    // handleCollect(e){
    //     console.dir(this);
    //     console.dir(e);
    // }
    render(){
        let props=this.props,
        data=props.data,
        state=this.state,
        authorBox;
        // console.dir(state);
        if(state.authorBoxData){
            authorBox=<Sidebox title="作者" type="author" authorBoxData={state.authorBoxData} />
        }

        return (
            <main className="main clearfix">
                <div className="sidebar f-fr">
                    {authorBox}
                </div>

                <DetailContent data={props.data} collectBtn={props.collectBtn} is_collect={props.is_collect} handleCollect={props.handleCollect}
                handleUnCollect={props.handleUnCollect} handleUps={props.handleUps}/>
            </main>
        )
    }
}

export default DetailBody;
export {DetailBody};
