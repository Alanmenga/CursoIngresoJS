function mostrar()
{
	var contador=0;
	var acumulador=0;
	var nroIngresado;

do {
	  nroIngresado = parseInt(prompt("Ingrese un numero: "));
	  while (isNaN(nroIngresado)) {
		  nroIngresado = prompt ("Lo que ingresaste no era un nro, volve a ingresarlo:");
		  nroIngresado = parseInt(nroIngresado);
	      }
	  contador++;
	  acumulador = nroIngresado + acumulador;
	  console.log ("El contador es: "+contador);
	  console.log ("Se encuentra acumulando: "+acumulador);
	}while (contador<5);


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN