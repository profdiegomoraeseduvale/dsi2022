<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Link CSS-->
   
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/estilo.css">
    
    <title>Login</title>
</head>

<body>


 <div class="container">

  
 
      <div class="row justify-content-center align-items-center vh-100">
        
  
              
                  <div class="col-auto background">               

                    <h1 class="titulo" id="texto">Sistema de Login</h1>

                      <form>                    

                      <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">E-mail</label>
                        <input type="email" class="form-control inputvalor" id="email" placeholder="Digite seu e-mail" required>
                      </div>
                      
                      <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Senha</label>
                        <input type="password" class="form-control inputvalor" id="senha" placeholder="Digite sua senha" required>
                      </div>    

                      <div class="mb-3">
                          <button  type="button" class="btn btn-primary botao" id="btnacessar">Acessar</button> 
                      </div>        
                      
                      <h6 class="alerta" id="alerta"></h6>

                    </form>

                   <!--   <div class="row">
                           <div class="col">
                            <button  type="button" class="btn btn-primary botao" id="btncalcular">Calcular</button> 
                           </div>
                           <div class="col">
                            <button  type="button" class="btn btn-success botao" id="btnlimpar">Limpar</button> 
                           </div> 
                         </div> -->
                                                   
                       
                </div>               
              
      </div>

</div>




 

 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</body>
</html>