<?php 

session_start();

$servidor = "localhost";
$usuario = "root";
$senha = "";
$db = "dsi2022";

$conexao = mysqli_connect($servidor, $usuario, $senha, $db);

if(!$conexao){
   echo 'Ocorreu um erro: Banco de Dados Offline';
}


?>