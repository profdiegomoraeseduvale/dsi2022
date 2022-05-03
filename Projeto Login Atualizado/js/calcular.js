let notas = document.getElementById('nota');
let adicionar = document.getElementById('btnadicionar');
let lista = document.getElementById('lista');
let barra = document.getElementById('barra');
let limpar = document.getElementById('btnlimpar');

let elementos = new Array();

function adicionarNota(){

    let soma = 0;
    let media = 0;
   
    elementos.push(parseFloat(notas.value));
    let item = document.createElement('li');
    item.setAttribute('class', 'list-group-item');
    item.innerHTML = notas.value;
    lista.appendChild(item);

    for(let i = 0; i < elementos.length; i++){

        soma = soma + elementos[i];
        media = soma/elementos.length;

        barra.setAttribute('style', 'width: '+media*10+'%;');
        barra.textContent = media.toFixed(1);

    }

}

function limparNota(){


}




adicionar.addEventListener('click', adicionarNota);
limpar.addEventListener('click', limparNota);