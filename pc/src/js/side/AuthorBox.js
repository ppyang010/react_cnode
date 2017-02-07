var React=require('react');

class AuthorBox extends React.Component{
    render(){
        return (
            <div>
                <div className="user-info">
                  <img className="user-big-lg" src="https://avatars.githubusercontent.com/u/985607?v=3&s=120" alt />
                  <a className="user-name link-d" href>fengmk2</a>
                </div>
                <p className="txt-p">积分：1000</p>
                <i className="txt-i">“ 用户很懒什么都没有说”</i>
            </div>
        );
    }
}
export {AuthorBox};
export default AuthorBox;
