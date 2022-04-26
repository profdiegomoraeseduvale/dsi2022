let email = document.getElementById('email');
let senha = document.getElementById('senha');
let acessar = document.getElementById('btnacessar');

function acessarSistema(){
   
   let emailbd = 'teste@teste.com';
   let senhabd = '123456';

   if(email.value==''){
     alert('Preencher o e-mail');
     email.focus();
     return;
   }

   if(senha.value==''){
     alert('Preencher a senha');
     senha.focus();
     return;
   }

   if(email.value==emailbd && senha.value==senhabd){
       alert('Acesso Liberado!');
       window.location.href = 'home.html';
   }else{
       alert('Acesso negado!');
   }

}



acessar.addEventListener('click',acessarSistema);
