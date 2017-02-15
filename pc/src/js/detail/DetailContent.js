var React=require('react');
var fetch=require('isomorphic-fetch');
class DetailContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collectBtn:props.collectBtn,
            is_collect:props.is_collect,
            replies:{}
        }
        this.handleShowReplyBox=(event,i)=>{
            // console.log(event);
            event.persist();
            var replyBox =document.getElementById('reply_of_reply_'+i);
            replyBox.style.display= ( replyBox.style.display == "none" ) ? "block":"none";
        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        var self=this;
        var artBody=self.refs['artBody'];
        let data=this.props.data;
        artBody.innerHTML=data.content;
    }

    handleReplyValue(e,id){
        var replies=this.state.replies;
        replies[id+'']=e.target.value;
        this.setState({
            replies:replies
        })
    }

    render(){
        var style="topic-type",tab;
        let props=this.props,
        state=this.state,
        self=this;
        let data=this.props.data;
        let visitCount=data.visit_count,
        username=data.author.loginname,
        replies=data.replies,
        replyDataList=[];
        switch (data.tab){
            case "share":
            tab="分享";break;
            case "job":
            tab="招聘";break;
            case "ask":
            tab="问答";break;
            default:
            tab="未知";
        }
        if(data.top){
            style="topic-type put-top";
            tab="置顶";
        }
        for(let i=0,len=replies.length;i<len;i++){
            let reply=replies[i],
            likes=reply.ups.length,
            replyBtnWrap,
            //是否显示回复按钮
            isShowRplyBtn=state.collectBtn===true ? {display:'inline-block'} : {display:'none'};
            //点赞按钮及回复按钮
            replyBtnWrap= (
                <div className="reply-btn-wrap">
                    <i className="icon-like" onClick={ (e)=>{props.handleUps(e,reply.id)} } /> <span className="like-count">{likes}</span>
                    <i className="icon-reply" style={isShowRplyBtn} onClick={ (e)=>{this.handleShowReplyBox(e,i)} } />
                </div>
            );
            //TODO
            //这里最好应该继续提取一个组件出来
            replyDataList.push(
                <li className="reply-list-item line-top" key={i}>
                    {replyBtnWrap}
                  <div className="reply-author-wrap ">
                    <img className="user-middle-lg f-fl" src={reply.author.avatar_url} alt="用户图片" title={reply.author.loginname} />
                    <a className="reply-name link-d" href="#">{reply.author.loginname}</a>
                    <a className="reply-time link-b" href="#">{i+1}楼•4 天前</a>
                  </div>
                  <div className="reply-content" dangerouslySetInnerHTML={{__html: reply.content}}>
                  </div>
                  <div  id={"reply_of_reply_"+i} className="reply-of-reply-wrap" style={{display: 'none'}}>
                    <form className="sidebox-form clearfix" onSubmit={(e)=>{props.handleReply.bind(this,e,i)()}}>
                        <input type="hidden" defaultValue={reply.id} name="reply_id" ref={"reply_id_"+i} ></input>
                        <input type="hidden" defaultValue={data.id}  ref={"topicID"} ></input>
                        <input type="hidden" defaultValue={reply.author.loginname} name="reply_loginname" ref={"reply_loginname_"+i} ></input>
                        {/*<div className="form-cell"><textarea name="name" value={(this.state.replies[i] ? this.state.replies[i] :'')}  onChange={(e)=>{this.handleReplyValue(e,i)}} ref="reply_content"/></div>*/}
                        <div className="form-cell"><textarea name="name" defaultValue={''} ref={"reply_content_"+i}/></div>
                        <div className="form-cell f-fr"> <button className="btn-primary" type="submit">回复</button> </div>
                        <div className="form-cell f-fr"> <button className="btn-gray" type="button" onClick={ (e)=>{this.handleShowReplyBox(e,i)} } >取消</button> </div>
                    </form>
                  </div>
                </li>
            )
        }
        return (
            <div className="content clearfix">
              <div className="art-wrap">
                <div className="art-head">
                  <span className={style}>{tab}</span>
                  <h2 className="art-title">{data.title}</h2>
                  <div className="art-info">
                    <span className="art-time">发布于3天前</span>
                    <span className="art-author">作者 <a href>{username}</a></span>
                    <span className="art-visits">{visitCount} 次浏览</span>
                    <span className="from">来自 分享</span>
                    {
                        (function(){
                            //是否显示
                            if(state.collectBtn){
                                //用户收藏
                                if(props.is_collect){
                                    return (
                                        <button className="btn-gray f-fr" type="button" onClick={props.handleUnCollect}>已收藏</button>
                                    );
                                }else{
                                    return (
                                        <button className="btn-green f-fr" type="submit" onClick={(e)=>{props.handleCollect(e)}}>收藏</button>
                                    );
                                }
                            }
                        })()
                    }

                  </div>
                </div>
                <div className="art-body line-top" ref="artBody" >


                </div>
              </div>
              <div className="reply-wrap">
                <div className="reply-head">
                  <span>{replies.length} 回复</span>
                </div>
                <div className="reply-body">
                  <ul className="reply-list">
                    {replyDataList}
                  </ul>
                </div>
              </div>

              <div className="sidebox">
                <div className="sidebox-head"><span>新建回复</span></div>
                <div className="sidebox-body">
                  <div className="sidebox-body-wrap">
                    <div className="reply-of-reply-wrap" style={{display: 'block'}}>
                      <form className="sidebox-form clearfix" onSubmit={(e)=>{props.handleReply.bind(this,e)()}}>
                          <input type="hidden" defaultValue={data.id}  ref={"topicID"} ></input>
                          <div className="form-cell"><textarea name="name"  ref="reply_content"/></div>
                          <div className="form-cell f-fr"> <button className="btn-primary" type="submit">回复</button> </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        )
    }
}

export default DetailContent;
export {DetailContent};
