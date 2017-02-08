/**
 * 作者用户信息box
 * @type {[type]}
 */
var React=require('react');
var fetch=require('isomorphic-fetch');
class AuthorBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginname:"test",
        }
    }

    componentWillMount(){

    }
    componentDidMount(){
        console.log("componentDidMount");
        var result=this._fetchDate(this.props.loginname);
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
                        self._showHTML(self.refs['userinfo'],data);
                    }
                })
            }
        });
    }
    _showHTML(dom,data){
        //注意要是html语法不是jsx语法
        dom.innerHTML=`
        <div class="user-info">
          <img class="user-big-lg" src=${data.avatar_url} alt />
          <a class="user-name link-d" href>${data.loginname}</a>
        </div>
        <p class="txt-p">积分：${data.score}</p>
        `;
    }
    _fetchDate(str){
        return fetch('https://cnodejs.org/api/v1/user/'+str,{
            method:"get",
        })

    }
    render(){
        return (
            <div ref="userinfo" className="sidebox-body-wrap">
            </div>
        );
    }
}
export {AuthorBox};
export default AuthorBox;
