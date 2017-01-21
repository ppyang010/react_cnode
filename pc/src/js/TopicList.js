var React=require('react');
var TopicItem =require('./TopicItem.js');
class TopicList extends React.Component{
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
