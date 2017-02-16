/**
 * 复用面板box
 * 参数：
 * title:标题
 * type：类型
 * boxData：不同body对应的数据
 * @type {[type]}
 */
var React=require('react');
import {AuthorBox} from './AuthorBox.js';
import {LoginFormBox} from './LoginFormBox.js';
import {MsgListBox} from './MsgListBox.js';
// import {TopicList} from '../TopicList.js';
var TopicList=require('../TopicList.js');
class Sidebox extends React.Component{
    render(){
        let props=this.props,
        type=props.type,
        bodyBox;
        switch (type){
            case 'author':
            let loginname=props.loginname;
            bodyBox=<AuthorBox authorBoxData={props.authorBoxData} isShowWriteBtn={props.isShowWriteBtn && true}/>;break;
            case 'list':
            bodyBox=<TopicList dataList={props.boxData} />;break;
            case 'login':
            bodyBox=<LoginFormBox/>;break;
            case 'newMsg':
            case 'oldMsg':
            bodyBox=<MsgListBox msgList={props.boxData} />;break;
            default:
            break;
        }
        return (
            <div className="sidebox">
                <div className="sidebox-head"><span>{props.title}</span></div>
                <div className="sidebox-body">
                    {bodyBox}
                </div>
            </div>

        )
    }
}
export default Sidebox;
export {Sidebox};
