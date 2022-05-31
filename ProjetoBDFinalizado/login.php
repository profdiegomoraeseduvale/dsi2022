<?php

session_start();

include 'db.php';

$email = $_POST['email'];
$senha = $_POST['senha'];

$query = "SELECT * FROM Usuario WHERE usu_email = '$email' AND usu_senha = '$senha'";

$consulta = mysqli_query($conexao, $query);

    if(mysqli_num_rows($consulta)==1){
    
        $row = mysqli_fetch_array($consulta);       
 
        $_SESSION['nomeusuario'] = $row['usu_nome'];       
        header('location: home.php');
    }else{
        header('location: index.php?erro');
    }
?>