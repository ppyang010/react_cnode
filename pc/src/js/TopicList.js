var React=require('react');
var TopicItem =require('./TopicItem.js');
var fetch=require('isomorphic-fetch');
class TopicList extends React.Component{
    // static state : {
    //     test:"ccytest"
    // }
    constructor(props) {
        super(props);
        this.state = {
            test:"ccytest"
        }
    }
    componentWillMount(){
        console.log("componmentWillMount");
        var result=this._fetchDate();
        var self=this;
        console.log("result="+result);
    }
    componentDidMount(){
        console.log("componentDidMount");
        var result=this._fetchDate();
        var self=this;
        // console.log("result="+result);
        result.then(function(res){
            // console.dir(res);
            if (res.ok) {
                res.json().then(function(obj) {
                    // 这样数据就转换成json格式的了
                    // console.dir(obj);
                    if(obj.success){
                        self.setState({
                            dataList:obj.data
                        })
                    }
                })
            }
        });
    }
    _fetchDate(){
        return fetch('https://cnodejs.org/api/v1/topics?page=1',{
            method:"get",
        })
        // .then(function(res){
        //     console.dir(res);
        //     if (res.ok) {
        //         res.json().then(function(obj) {
        //             // 这样数据就转换成json格式的了
        //             console.dir(obj);
        //             if(obj.success){
        //                 this.setState({
        //                     dateList:obj.date
        //                 })
        //             }
        //         })
        //     }
        // });
    }

    render(){
        console.log('render');
        var dataList=[]
        if(!!this.state.dataList){
            console.dir(this.state.dataList);
            dataList=this.state.dataList;
        }else{
            console.log(null);
        }
        var topicItems=[];
        for(var i=0,len=dataList.length;i<len;i++){
            topicItems.push(<TopicItem key={i} title={dataList[i].title} visitCount={dataList[i].visit_count} replyCount={dataList[i].reply_count}
                topicAuthorImg={dataList[i].author.avatar_url} top={dataList[i].top} tab={dataList[i].tab} />);
        }
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
