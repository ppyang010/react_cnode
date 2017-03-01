var CookieUtil={
    //获取cookie
    getCookies:function (){
      var cookie={};
      var all=document.cookie;//获取的为一个字符串
      if(all === ""){
        return cookie;
      }
      var list =all.split(';');
      for(var i=0,len=list.length;i<len;i++){
        var item=list[i];
        var p=item.indexOf("=");
        var name=item.substring(0,p).replace(/^\s+|\s+$/g, "");
        name=decodeURIComponent(name);
        var value=item.substring(p+1);
        value=decodeURIComponent(value);
        cookie[name]=value;
      }
      return cookie;
    },
    //添加设置cookie
    setCookie:function (name,value,expires,path,domain){
      var str=name+"="+encodeURIComponent(value);
      if(!!expires){
        var oDate = new Date();
        oDate.setDate( oDate.getDate() + expires);//expires单位为天
        str+=";expires="+oDate.toGMTString();
      }
      if(!!path){
        str+=";path="+path;//指定可访问cookie的目录
      }
      if(!!domain){
        str+=";domain="+domain;//指定可访问cookie的域
      }
      document.cookie=str;
    },
    //删除cookie
    delCookie:function (name){
      var date=new Date();
      date.setTime(date.getTime()-10000);
      document.cookie=name+"= ;expire="+date.toGMTString();//时间设置为已经过的时间
            //document.cookie=name"= ;max-age=0"
    }
}

export default CookieUtil;
export {CookieUtil};
