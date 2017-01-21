var React=require('react');

class TopicItem extends React.Component{
    render(){
        return(
            <li className="list-item line-top">
              <div className="item-rg f-fr">
                <a href><img className="user-small-lg" src="https://avatars.githubusercontent.com/u/8315732?v=3&s=120" alt />
                  <span className="last-reply-time">30分钟前</span></a>
              </div>
              <div className="item-warp ">
                <a href><img className="topic-author" src="https://avatars.githubusercontent.com/u/4279697?v=3&s=120" alt="alt" title="title" /></a>
                <div className="topic-count clearfix">
                  <span className="count-of-replies">187</span>
                  <span className="count-seperator">/</span>
                  <span className="count-of-visits">44292</span>
                </div>
                <div className="topic-title-warp">
                  <span className="topic-type put-top">置顶</span>
                  <a className="topic-title" href title="《一起学 Node.js》彻底重写完毕">《一起学 Node.js》彻底重写完毕</a>
                </div>
              </div>
            </li>
        )
    }
}


module.exports=TopicItem;
