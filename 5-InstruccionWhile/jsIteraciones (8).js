function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var nroIngresado;
	var respuesta='si';

	while ( respuesta == "si"){
		nroIngresado = parseInt(prompt("Ingresa un nro: "));
		//validar que el dato este correcto
		while (isNaN(nroIngresado)){
			nroIngresado=parseInt(prompt("Lo que ingresaste no es un nro, volve a intentarlo: "));
		}
		//En esta parte sabemos que el dato es correcto
		if ( nroIngresado >= 0 ){
			positivo = positivo + nroIngresado;
		}else {
			negativo = negativo * nroIngresado;
		}
		respuesta = prompt ("Desea continuar? Escriba si: ");


	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN