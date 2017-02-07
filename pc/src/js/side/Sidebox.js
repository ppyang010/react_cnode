var React=require('react');
import {AuthorBox} from './AuthorBox.js'
class Sidebox extends React.Component{
    render(){
        let props=this.props;

        return (
            <div className="sidebox">
                <div className="sidebox-head"><span>{props.title}</span></div>
                <div className="sidebox-body">
                    <AuthorBox/>
                </div>
            </div>

        )
    }
}
export default Sidebox;
export {Sidebox};
