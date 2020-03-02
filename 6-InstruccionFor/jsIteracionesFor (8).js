function mostrar()
{
    var i;
    var nroIngresado;
    var cantDivisores=0;
    
    nroIngresado=parseInt(prompt("Ingrese un numero: "));
    //Validamos
    while (isNaN(nroIngresado)){
        nroIngresado=parseInt(prompt("Lo que ingresaste no es un numero, volve a intentalo: "));
    }
    //Sabemos que lo ingresado es un numero
    for (i=0; i<=nroIngresado; i++){
        if(nroIngresado%i==0){
            cantDivisores++;
        }
    }
    if (cantDivisores==2){
        alert ("El numero ingresado es primo");
    }else{
        alert ("El numero ingresado no es primo");
    }



}//FIN DE LA FUNCIÓN