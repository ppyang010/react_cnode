/**
 * 作者用户信息box
 * @type {[type]}
 */
var React=require('react');
var fetch=require('isomorphic-fetch');
import {Link} from 'react-router';

class AuthorBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    componentWillMount(){

    }
    componentDidMount(){
        //数据请求放到父组件了
        // console.log("componentDidMount");
        // var result=this._fetchDate(this.props.loginname);
        // var self=this;
        // // console.log("result="+result);
        // result.then(function(res){
        //     // console.dir(res);
        //     if (res.ok) {
        //         res.json().then(function(obj) {
        //             // 这样数据就转换成json格式的了
        //             //  console.dir(obj);
        //             if(obj.success){
        //                 let data=obj.data;
        //                 self.setState({
        //                     avatarUrl:data.avatar_url,
        //                     loginname:data.loginname,
        //                     score:data.score
        //                 })
        //             }
        //         })
        //     }
        // });
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
        let props=this.props,
        data=props.authorBoxData,
        userInfo;
        console.log('isShowWriteBtn='+props.isShowWriteBtn);
        if(!!data.loginname){
            userInfo=(
                    <div className="user-info">
                      <img className="user-big-lg" src={data.avatar_url} alt="图片" />
                      <Link className="user-name link-d" to={'/user/'+data.loginname}>{data.loginname}</Link>
                      <p className="txt-p">积分：{data.score}</p>
                      {
                          (function(){
                              if(props.isShowWriteBtn){
                                  return (<button className="btn-primary" type="submit">发布话题</button>);
                              }else{
                                  return ;
                              }
                          })()
                      }

                    </div>
            );
        }
        return (
            <div ref="userinfo" className="sidebox-body-wrap">
                {userInfo}
            </div>
        );
    }
}
AuthorBox.defaultProps={
    name:'111'
}
export {AuthorBox};
export default AuthorBox;
