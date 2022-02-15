const valor = document.getElementById('titulo');        

valor.addEventListener('click',atualizaTitulo);       

function atualizaTitulo(){
    valor.textContent = 'Diego';
}       

