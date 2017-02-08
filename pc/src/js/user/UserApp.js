/**
 * 个人中心
 * @type {[type]}
 */
var React=require('react');
var Header=require('../Header.js');
var Footer=require('../Footer.js');

import {UserBody} from './UserBody.js';


class UserApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            test:"ccytestDetailApp"
        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        console.log("componentDidMount");
    }



    render(){

        return (
            <div>
                <Header/>
                <UserBody loginname={this.props.params.loginname}/>
                <Footer/>
            </div>
        )
    }
}
export {UserApp};
