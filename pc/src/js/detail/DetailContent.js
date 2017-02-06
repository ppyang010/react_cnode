var React=require('react');

class DetailContent extends React.Component{
    render(){
        var style="topic-type",tab;
        let data=this.props.data;
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
        return (
            <div className="content clearfix">
              <div className="art-wrap">
                <div className="art-head">
                  <span className={style}>{tab}</span>
                  <h2 className="art-title">{data.title}</h2>
                  <div className="art-info">
                    <span className="art-time">发布于3天前</span>
                    <span className="art-author">作者 <a href>fengmk2</a></span>
                    <span className="art-visits">1371 次浏览</span>
                    <span className="from">来自 分享</span>
                  </div>
                </div>
                <div className="art-body line-top">
                  <div className="markdown-text">
                    <p><a href="https://eggjs.org/" target="_blank">egg</a> 自9月份在宁JS正式宣布开源以来，一直在迭代改进。源代码是开放出来了，但是文档一直落后于代码进度。</p>
                    <p><strong>开源不仅仅是代码，文档也是非常重要的部分。</strong></p>
                    <p>为了让 egg 文档尽快完成第一个发布版本，egg 团队已经齐聚北京，陪伴着雾霾在集中讨论和分工开始编写着自高考以来最大的一次文字工作。</p>
                    <p>在吸着雾霾写文档之余，我们也想尽快让对 egg 感兴趣的同学在第一时间看到最新鲜的文档，所以我们决定每天都会直播当天 review 通过的文档，会以回复的形式粘贴写来。</p>
                    <p>当然，第一版文档并不会涵盖 egg 框架的方方面面，如果不足，欢迎大家敦促指正。</p>
                  </div>
                </div>
              </div>
              <div className="reply-wrap">
                <div className="reply-head">
                  <span>53 回复</span>
                </div>
                <div className="reply-body">
                  <ul className="reply-list">
                    <li className="reply-list-item">
                      <div className="reply-btn-wrap"><i className="icon-like" /> <span className="like-count">1</span> <i className="icon-reply" /></div>
                      <div className="reply-author-wrap ">
                        <img className="user-middle-lg f-fl" src="https://avatars.githubusercontent.com/u/985607?v=3&s=120" alt />
                        <a className="reply-name link-d" href="#">dead-horse</a>
                        <a className="reply-time link-b" href="#">1楼•4 天前</a>
                      </div>
                      <div className="reply-content">
                        <div className="markdown-text">
                          <p>第一篇 review 通过，因为是分工编写，不保证文档是按序产出的。<br /><strong>框架扩展</strong><a href="https://github.com/eggjs/egg/blob/master/docs/source/zh-cn/basics/extend.md" target="_blank">https://github.com/eggjs/egg/blob/master/docs/source/zh-cn/basics/extend.md</a> ，介绍 egg 框架是如何对 koa 进行扩展的，也详细介绍了开发者如何基于这个 extend 机制扩展 egg 的功能满足自身的业务需求。</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        )
    }
}

export default DetailContent;
export {DetailContent};
