var React=require('react');

import {DetailContent} from './DetailContent.js';
class DetailBody extends  React.Component{
    render(){
        let props=this.props;
        console.dir(<DetailContent/>);
        return (
            <main className="main clearfix">
                <div className="sidebar f-fr">
                  <div className="sidebox">
                    <div className="sidebox-head"><span>作者</span></div>
                    <div className="sidebox-body">
                      <div className="user-info">
                        <img className="user-big-lg" src="https://avatars.githubusercontent.com/u/985607?v=3&s=120" alt />
                        <a className="user-name link-d" href>fengmk2</a>
                      </div>
                      <p className="txt-p">积分：1000</p>
                      <i className="txt-i">“ 用户很懒什么都没有说”</i>
                    </div>
                  </div>

                  <div className="sidebox">
                    <div className="sidebox-head"><span>积分榜</span> &nbsp;<a className="sidebox-link" href>TOP 100 &gt;&gt;</a></div>
                    <div className="sidebox-body">
                      <ul className="sidebox-content-list">
                        <li className="sidebox-content-list-item">
                          <span className="txt">16480</span><a className="link" href>15ting</a>
                        </li>
                        <li className="sidebox-content-list-item">
                          <span className="txt">16480</span><a className="link" href>15ting</a>
                        </li>
                        <li className="sidebox-content-list-item">
                          <span className="txt">16480</span><a className="link" href>15ting</a>
                        </li>
                        <li className="sidebox-content-list-item">
                          <span className="txt">16480</span><a className="link" href>15ting</a>
                        </li>
                        <li className="sidebox-content-list-item">
                          <span className="txt">16480</span><a className="link" href>15ting</a>
                        </li>
                        <li className="sidebox-content-list-item">
                          <span className="txt">16480</span><a className="link" href>15ting</a>
                        </li>
                        <li className="sidebox-content-list-item">
                          <span className="txt">16480</span><a className="link" href>15ting</a>
                        </li>
                        <li className="sidebox-content-list-item">
                          <span className="txt">16480</span><a className="link" href>15ting</a>
                        </li>
                        <li className="sidebox-content-list-item">
                          <span className="txt">16480</span><a className="link" href>15ting</a>
                        </li>
                        <li className="sidebox-content-list-item">
                          <span className="txt">16480</span><a className="link" href>15ting</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


                <DetailContent data={props.data}/>

            </main>
        )
    }
}

export default DetailBody;
export {DetailBody};
