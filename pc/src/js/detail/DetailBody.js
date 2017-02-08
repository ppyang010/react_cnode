var React=require('react');
import {Sidebox} from '../side/Sidebox.js';
import {DetailContent} from './DetailContent.js';
class DetailBody extends  React.Component{
    render(){
        let props=this.props,
        data=props.data;
        return (
            <main className="main clearfix">
                <div className="sidebar f-fr">
                  <Sidebox title="作者" type="author" loginname={data.author.loginname}/>

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
