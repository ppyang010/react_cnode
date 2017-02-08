/**
 * 复用面板box
 * @type {[type]}
 */
var React=require('react');
import {AuthorBox} from './AuthorBox.js'
class Sidebox extends React.Component{
    render(){
        let props=this.props,
        type=props.type,
        bodyBox;
        switch (type){
            case 'author':
            let loginname=props.loginname;
            bodyBox=<AuthorBox authorBoxData={props.authorBoxData} />;break;
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
