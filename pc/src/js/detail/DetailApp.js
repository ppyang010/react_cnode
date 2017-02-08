/**
 * 详情页
 * @type {[type]}
 */
var React=require('react');
var Header=require('../Header.js');
var Footer=require('../Footer.js');

import {DetailBody} from './DetailBody.js'
class DetailApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            test:"ccytestDetailApp"
        }
    }
    componentWillMount(){
        console.log("componmentWillMount");
        var self=this;
    }
    componentDidMount(){
        console.log("componentDidMount");
        var result=this._fetchDate(this.props.params.topicID);
        var self=this;
        // console.log("result="+result);
        result.then(function(res){
            // console.dir(res);
            if (res.ok) {
                res.json().then(function(obj) {
                    // 这样数据就转换成json格式的了
                     console.dir(obj);
                    if(obj.success){
                        let data=obj.data;
                        self.setState({
                            data:data,
                            title:data.title,
                            tab:data.share,
                            visitCount:data.visit_count,
                            top:data.top,
                            good:data.good,
                            content:data.content,

                        })
                    }
                })
            }
        });
    }

    _fetchDate(id){
        return fetch('https://cnodejs.org/api/v1/topic/'+id,{
            method:"get",
        })

    }

    render(){
        var props=this.props;
        var state=this.state;
        var topicID=props.params.topicID;
        if(state.data){
            var body=<DetailBody data={state.data}  />
        }
        return (
            <div>
                <Header/>
                {body}
                <Footer/>
            </div>
        )
    }
}
export {DetailApp};
