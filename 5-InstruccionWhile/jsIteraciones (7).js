function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var nroIngresado;

	do {
		nroIngresado = parseInt(prompt("Ingrese un numero: "));
		contador++;
		acumulador = nroIngresado + acumulador;
	  }while (contador<5)

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN