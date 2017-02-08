var React=require('react');
var fetch=require('isomorphic-fetch');
class DetailContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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
    render(){
        var style="topic-type",tab;
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
            replyBtnWrap;

            if(likes>0){
                replyBtnWrap= <div className="reply-btn-wrap"><i className="icon-like" /> <span className="like-count">{likes}</span> <i className="icon-reply" style={{display:'none'}} /></div>;
            }else{
                replyBtnWrap= <div className="reply-btn-wrap"> <i className="icon-reply" style={{display:'none'}} /></div>;
            }
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
            </div>
        )
    }
}

export default DetailContent;
export {DetailContent};
