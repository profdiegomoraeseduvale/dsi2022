let valor1 = document.getElementById('valor1');
let valor2 = document.getElementById('valor2');
let resultado = document.getElementById('resultado');
let botaocalcular = document.getElementById('btncalcular');
let botaolimpar = document.getElementById('btnlimpar');



function calcularValores(){  

   let result = parseInt(valor1.value)+parseInt(valor2.value);
   resultado.value = result;      

}   
    


function limparValores(){

   valor1.value = null;
   valor2.value = null;
   resultado.value = null;



}

botaocalcular.addEventListener('click',calcularValores);
botaolimpar.addEventListener('click',limparValores);