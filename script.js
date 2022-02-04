function gerarlink(){
  let number=document.container.number.value
  let message=document.container.message.value
  let url="https//wa.me/";
  let endUrl=`${url}${number}?text=${message}`;
  document.getElementById('end_url').innerText=endUrl;
}