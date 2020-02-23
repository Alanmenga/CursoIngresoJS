function mostrar()
{
	var contador=0;
	var acumulador=0;
	var nroIngresado;
	var promedio;

do {
	  //Ingresar el numero y parsearlo
	  nroIngresado = parseInt(prompt("Ingrese un numero: "));
	  //Validar que el dato este correcto
	  while (isNaN(nroIngresado)) {
		  nroIngresado = prompt ("Lo que ingresaste no era un nro, volve a ingresarlo:");
		  nroIngresado = parseInt(nroIngresado);
		  }
	  //En esta parte sabemos que lo ingresado es un numero
	  contador++; //contador = contador + 1
	  acumulador = nroIngresado + acumulador;
	  console.log ("El contador es: "+contador);
	  console.log ("Se encuentra acumulando: "+acumulador);
	}while (contador<5);

//Mostramos el acumulador
document.getElementById('suma').value=acumulador;
//Mostramos el promedio
promedio = acumulador / contador ;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN