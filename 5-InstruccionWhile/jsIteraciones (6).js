function mostrar()
{
	var contador=0;
	var acumulador=0;
	var nroIngresado;

do {
	  nroIngresado = parseInt(prompt("Ingrese un numero: "));
	  contador++;
	  acumulador = nroIngresado + acumulador;
	}while (contador<5)


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN