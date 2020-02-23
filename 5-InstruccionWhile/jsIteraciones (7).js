function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var nroIngresado;

	while (respuesta == "si"){
		nroIngresado =parseInt(prompt("Ingrese un numero"));
		//validar que el dato este correcto
		while(isNaN(nroIngresado)){
			nroIngresado=parseInt(prompt("Lo que ingresaste no era un nro, volve a ingresar: "));
		}
		//En esta parte sabemos que el dato es correcto
		contador++; //contador=contador+1
		acumulador = acumulador + nroIngresado;
		console.log ("El contador es: "+contador);
	    console.log ("Se encuentra acumulando: "+acumulador);
		respuesta = prompt("Desea continuar? Escriba si para continuar");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN