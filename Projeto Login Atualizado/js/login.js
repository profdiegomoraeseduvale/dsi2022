let email = document.getElementById('email');
let senha = document.getElementById('senha');
let acessar = document.getElementById('btnacessar');
let alerta = document.getElementById('alerta');

let contador = 0;

function acessarSistema(){

  if(contador<2){

  
   
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
       //alert('Acesso negado!');
       alerta.removeAttribute('hidden');
       alerta.textContent = 'Acesso Negado! Tentativas restantes: '+(2-contador);
       contador++;
   }

  }else{
     alerta.textContent = 'Acesso Bloqueado!';
    }

}



acessar.addEventListener('click',acessarSistema);
