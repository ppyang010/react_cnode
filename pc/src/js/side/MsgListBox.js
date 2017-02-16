/**
 * 消息栏box
 * @type {[type]}
 */
var React=require('react');
var fetch=require('isomorphic-fetch');
import {Link,browserHistory,hashHistory } from 'react-router';
import {MsgItemBox} from './MsgItemBox.js'
class MsgListBox extends React.Component{


    render(){
        var props=this.props,
        itemList=[];
        if(props.msgList){
            let list=props.msgList;
            for(let d in list){
                // console.log(d);
                let item = (<MsgItemBox key={d} loginname={list[d].author.loginname} title={list[d].topic.title} topicID={list[d].topic.id}/>);
                itemList[itemList.length]=item;
            }
        }
        //将消息item在提取组件 防止评论item的情况 在需要获取值的时候 需要在ref 中加上index值
        return (

            <div className="sidebox-body-wrap">
                <ul className="sidebox-content-list">
                  {itemList}
                </ul>
            </div>
        );
    }
}

export default MsgListBox;
export {MsgListBox};
