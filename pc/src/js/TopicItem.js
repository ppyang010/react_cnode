var React=require('react');

class TopicItem extends React.Component{

    imgErrorHandle(){
        console.dir(this);
        this.refs['topicAuthorImg'].src="https://avatars.githubusercontent.com/u/8315732?v=3&s=120";
    }
    render(){
        var style="topic-type",tab;
        var props=this.props;
        switch (props.tab){
            case "share":
            tab="分享";break;
            case "job":
            tab="招聘";break;
            case "ask":
            tab="问答";break;
            default:
            tab="未知";
        }
        if(props.top){
            style="topic-type put-top";
            tab="置顶";
        }



        return(
            <li className="list-item line-top">
              <div className="item-rg f-fr">
                <a href><img className="user-small-lg" src="https://avatars.githubusercontent.com/u/14039380?v=3&s=120" alt />
                  <span className="last-reply-time">30分钟前</span></a>
              </div>
              <div className="item-warp ">
                <a href><img className="topic-author" ref="topicAuthorImg" src={this.props.topicAuthorImg} alt="alt" onError={this.imgErrorHandle.bind(this)} title="title" /></a>
                <div className="topic-count clearfix">
                  <span className="count-of-replies">{this.props.replyCount}</span>
                  <span className="count-seperator">/</span>
                  <span className="count-of-visits">{this.props.visitCount}</span>
                </div>
                <div className={"topic-title-warp"}>
                  <span className={style} >{tab}</span>
                  <a className="topic-title" href title={this.props.title} >{this.props.title}</a>
                </div>
              </div>
            </li>
        )
    }
}


module.exports=TopicItem;