/**
 * 详情页
 * @type {[type]}
 */
var React=require('react');
var Header=require('../Header.js');
var Footer=require('../Footer.js');
import {CookieUtil} from '../util/CookieUtil.js';
import {DetailBody} from './DetailBody.js'
class DetailApp extends React.Component{

    constructor(props) {
        super(props);
        var cookie=CookieUtil.getCookies();
        var loginUserInfo={
            loginUserState:false,
        }
        var self=this;
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
        //收藏
        this.handleCollect=(e)=>{
            fetch('https://cnodejs.org/api/v1/topic_collect/collect ',{
                method:"post",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:"accesstoken="+loginUserInfo.userToken+"&topic_id="+this.props.params.topicID
            }).then(function(res){
                if (res.ok) {
                    res.json().then(function(obj) {
                        // 这样数据就转换成json格式的了
                         console.dir(obj);
                        if(obj.success){
                            self.setState({is_collect:true});
                        }
                    })
                }
            })
        }
        //取消收藏
        this.handleUnCollect=(e)=>{
            fetch('https://cnodejs.org/api/v1/topic_collect/de_collect',{
                method:"post",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:"accesstoken="+loginUserInfo.userToken+"&topic_id="+this.props.params.topicID
            }).then(function(res){
                if (res.ok) {
                    res.json().then(function(obj) {
                        // 这样数据就转换成json格式的了
                         console.dir(obj);
                        if(obj.success){
                            self.setState({is_collect:false});
                        }
                    })
                }
            })
        }
        //评论点赞
        this.handleUps=(e,reply_id)=>{
            e.persist();
            fetch(`https://cnodejs.org/api/v1/reply/${reply_id}/ups`,{
                method:"post",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:"accesstoken="+loginUserInfo.userToken
            }).then(function(res){
                if (res.ok) {
                    res.json().then(function(obj) {
                        // 这样数据就转换成json格式的了
                         console.dir(obj);
                        if(obj.success){
                            let likes=+e.target.nextElementSibling.innerText;
                            if(obj.action==="down"){
                                likes-=1;
                            }else if(obj.action==="up"){
                                likes+=1;
                            }
                            e.target.nextElementSibling.innerText=likes;
                            self.setState({});
                        }
                    })
                }
            })
        }
    }
    componentWillMount(){
        console.log("componmentWillMount");
        var self=this;
    }
    componentDidMount(){
        console.log("componentDidMount");
        //获取文章
        var result=this._fetchDate(this.props.params.topicID);
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
                            data:data,
                            title:data.title,
                            tab:data.share,
                            visitCount:data.visit_count,
                            top:data.top,
                            good:data.good,
                            content:data.content,
                            //下面的属性不要删
                            //是否被用户收藏
                            is_collect:data.is_collect
                        })
                    }
                })
            }
        });
    }

    _fetchDate(id){
        if(this.state.loginUserInfo.loginUserState){
            return fetch('https://cnodejs.org/api/v1/topic/'+id+'?accesstoken='+this.state.loginUserInfo.userToken,{
                method:"get",
            })
        }else{
            return fetch('https://cnodejs.org/api/v1/topic/'+id,{
                method:"get",
            })
        }
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    render(){
        // console.log('render');
        var props=this.props;
        var state=this.state;
        var topicID=props.params.topicID;
        var collectBtn;
        if(state.data){
            //用户已登陆
            if(state.loginUserInfo.loginUserState){
                collectBtn=true;//收藏按钮显示
            }else{
                collectBtn=false;//收藏按钮不显示
            }
            var body=<DetailBody data={state.data} collectBtn={collectBtn} is_collect={state.is_collect} handleCollect={this.handleCollect}
            handleUnCollect={this.handleUnCollect} handleUps={this.handleUps} />
        }
        return (
            <div>
                <Header/>
                {body}
                <Footer/>
            </div>
        )
    }
    //执行收藏操作
    _doCollect(token,topic){

    }
}
export {DetailApp};
