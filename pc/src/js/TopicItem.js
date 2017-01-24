var React=require('react');

class TopicItem extends React.Component{

    imgErrorHandle(e){
        console.log("img error")
        console.dir(e);
        console.dir(this);
        this.refs['topicAuthorImg'].src="https://avatars.githubusercontent.com/u/8315732?v=3&s=120";
    }
    render(){
        return(
            <li className="list-item line-top">
              <div className="item-rg f-fr">
                <a href><img className="user-small-lg" src="https://avatars.githubusercontent.com/u/8315732?v=3&s=120" alt />
                  <span className="last-reply-time">30分钟前</span></a>
              </div>
              <div className="item-warp ">
                <a href><img className="topic-author" ref="topicAuthorImg" src={this.props.topicAuthorImg} alt="alt" onError={this.imgErrorHandle} title="title" /></a>
                <div className="topic-count clearfix">
                  <span className="count-of-replies">{this.props.replyCount}</span>
                  <span className="count-seperator">/</span>
                  <span className="count-of-visits">{this.props.visitCount}</span>
                </div>
                <div className="topic-title-warp">
                  <span className="topic-type put-top">置顶</span>
                  <a className="topic-title" href title={this.props.title} >{this.props.title}</a>
                </div>
              </div>
            </li>
        )
    }
}


module.exports=TopicItem;
