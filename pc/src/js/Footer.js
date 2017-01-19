var React=require('react');

class Footer extends React.Component{
    render(){
        return (
            <footer className="footer" id="footer">
                <div className="footer-wrap">
                  <div className="links">
                    <a href className="link">RSS</a> |
                    <a href className="link">源码地址</a>
                  </div>
                  <div className="content">
                    <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                    <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
                  </div>
                </div>
            </footer>
        )
    }
}



module.exports=Footer;
