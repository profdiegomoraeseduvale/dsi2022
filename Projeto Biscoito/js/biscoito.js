let texto = document.getElementById('texto');
let imagem = document.getElementById('imagem');
let quebrar = document.getElementById('btnquebrar');
let novo = document.getElementById('btnnovo');

let frases = [
    'A vida trará coisas boas se tiveres paciência',
    'Não compense na ira o que lhe falta na razão',
    'Defeitos e virtudes são apenas dois lados da mesma moeda',
    'A maior de todas as torres começa no solo',
    'Não há que ser forte. Há que ser flexível'
];


function quebrarBiscoito(){

   let mensagem = Math.floor(Math.random()*frases.length);
   texto.textContent = frases[mensagem];

   imagem.setAttribute('src','./img/biscoitoAberto.png');
   quebrar.setAttribute('hidden', 'hidden');
   novo.removeAttribute('hidden');

}

function novoBiscoito(){
    texto.textContent = 'Biscoito da Sorte';
    imagem.setAttribute('src','./img/biscoito.png');
    quebrar.removeAttribute('hidden');
    novo.setAttribute('hidden','hidden');

}



quebrar.addEventListener('click',quebrarBiscoito);
novo.addEventListener('click',novoBiscoito);