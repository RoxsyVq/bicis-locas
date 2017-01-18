
function validateForm(){
	
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastname").value;
    var inputEmail = document.getElementById("input-email").value;
    var inputPassword = document.getElementById("input-password").value;
    var twitter = document.getElementById("input-social").value;
    var lista= document.getElementsByClassName("form-control")[4].value;
    var correo=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    
    
    if(name==""||lastName==""||inputEmail==""||inputPassword=="")
        {
         alert("Los campos estan vacios");
            return false;
        }
       
        
    if((/[0-9]/g).test(name)||(/[0-9]/g).test(lastName))
        {
        alert("Ingresa tu nombre");
            return false;
        }
       

    if(!correo.test(inputEmail))
        {
            return ("Ingresa tu Email");
            return false;
        }
       
    
        
    if (inputPassword.length<6)
        {
            return ("la  contraseña tiene que tener mas de 6 caracteres alfanumericos ");
            return false ;    
        }
      
    
    if (inputPassword=="123456"||inputPassword=="098754"||inputPassword=="password")
        {
            return ("Ingresa tu Contraseña");
            return false;
        }
          

    
     if (lista == 0)
        {
           return ("Escoge una bicicleta");
            return false;
        }
        else
            {
                span5.style.display="none";
            }
            
    if (name.toLowerCase())
        {
            document.getElementById("name").value= name.charAt(0).toUpperCase() + name.slice(1);
        }
        
    if (lastName.toLowerCase())
        {
            document.getElementById("lastname").value= lastName.charAt(0).toUpperCase() + lastName.slice(1);
        }   
   
}