var React =require('react');
import {Link,browserHistory,hashHistory } from 'react-router';
class MsgItemBox extends  React.Component{
    render(){
        return(
            <li className="sidebox-content-list-item">
              <p className="msg-item"><Link className="link-b" to={"/user/"+this.props.loginname}>{this.props.loginname}</Link>
              回复了你的话题 <Link className="link-b" to={"/topic/"+this.props.topicID}>{this.props.title}</Link>
              </p>
            </li>
        )
    }
}

export default MsgItemBox;
export {MsgItemBox};
