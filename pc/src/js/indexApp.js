var React=require('react');
var Header=require('./Header.js');
var Body=require('./Body.js')
var Footer=require('./Footer.js');

class IndexApp extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div>
                <Header />
                <Body/>
                <Footer/>
            </div>
        )

    }
}
module.exports=IndexApp;
