var React=require('react');
var TopicItem =require('./TopicItem.js');
var fetch=require('isomorphic-fetch');
class TopicList extends React.Component{
    // state = {
    //     test:"ccytest"
    // }
    componmentWillMount(){
        console.log("componmentWillMount");
        fetch('https://cnodejs.org/api/v1/topics?page=1',{
            method:"get",
        }).then(function(res){
            console.dir(res);
        });
    }
    render(){
        var topicItems=[];
        for(var i=0;i<3;i++){
            topicItems.push(<TopicItem key={i} />);
        }
        console.log("hello");
        return (
            <div className="m-topic-content">
              <ul className="topic-list">
                {topicItems}
              </ul>
            </div>
        )
    }
}

module.exports=TopicList;
