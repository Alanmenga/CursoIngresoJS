function mostrar()
{
    var i;
    var nroIngresado;
    var cantPares=0;
   

    
    for (i=0; ;i++) {
        nroIngresado = parseInt(prompt ("Ingrese un numero: "));
        //validamos el dato
        while (isNaN(nroIngresado)){
            nroIngresado=parseInt(prompt("Lo que ingresaste no era un nro, volve a ingresar: "));
        }
        //sabemos que el dato es un numero
    console.log ("El nro ingresado es :"+nroIngresado);
      var resto=nroIngresado%2;
			if (resto==0){
		    //es un numero par
		    cantPares++;
              }
    if ( i >= nroIngresado){
        break
    }
    console.log ("La cantidad de pares es: "+cantPares);
    }
    alert ("La cantidad de numeros pares es: "+cantPares);




}//FIN DE LA FUNCIÓN