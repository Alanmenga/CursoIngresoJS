function mostrar()
{
    // declarar variables
	var maximo;
	var minimo;
	var flag=0;
	var nroIngresado;
	var respuesta='si';

	while(respuesta!='no')
	{
		nroIngresado = parseInt(prompt("Ingrese un nro: "))
		//validar el dato
		while (isNaN(nroIngresado)){
			nroIngresado=parseInt(prompt("Lo que ingresaste no era un nro, volve a ingresar: "));
		}
		//observar si son maximos o minimos
		if(flag==0){
			//entrariamos la primera vez solamente
			maximo = nroIngresado;
			minimo = nroIngresado;
			flag = 1;
		}else if (nroIngresado>maximo){
			maximo = nroIngresado;
		}else if (nroIngresado<minimo){
			minimo = nroIngresado;
		}
		respuesta=prompt("Desea continuar? Entonces escriba no");
	}

document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;


}//FIN DE LA FUNCIÓN