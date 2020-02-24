function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var acumuPositivos=0;
	var acumuNegativos=0;
	var nroIngresado;
	var cantNegativos=0;
	var cantPositivos=0;
	var cantCeros=0;
	var cantNumPares=0;
	var promedioNegativos;
	var promedioPositivos;
	var difereciaNegativosPositivos;
	
	var respuesta="si";

	while(respuesta!="no")
	{
		nroIngresado=parseInt(prompt("Ingrese un numero: "));
		//validamos el dato
		while(isNaN(nroIngresado)){
			nroIngresado=parseInt(prompt("Lo que ingresaste no es un nro, volve a ingresar: "));
		}
		//sabemos que el dato es un numero
		if (nroIngresado>0){
			  //es positivo
			  acumuPositivos=acumuPositivos+nroIngresado;
			  cantPositivos++;
			  var resto=nroIngresado%2;
			  if (resto==0){
				  //es un numero par
				  cantNumPares++;
			  }
			  console.log("Numero ingresado positivo: "+nroIngresado);
		}else if (nroIngresado<0){
			  //es negativo
			  acumuNegativos=acumuNegativos+nroIngresado;
			  cantNegativos++;
			  var resto=nroIngresado%2;
			  if (resto==0){
				  //es un numero par
				  cantNumPares++;
			  }
			  console.log("Numero ingresado negativo: "+nroIngresado);
        }else {
			cantCeros++;
		} 

		contador++;
		respuesta=prompt("Desea continuar? Si desea cancelar escriba no ");
	}//terminamos el bucle

	//se calculan los promedios
	promedioNegativos = acumuNegativos / cantNegativos;
	promedioPositivos = acumuPositivos / cantPositivos;
	difereciaNegativosPositivos = acumuPositivos + acumuNegativos;

	document.write("La suma de los numeros positivos es :" + acumuPositivos + "<br>"+
	               "La suma de los numeros negativos es :" + acumuNegativos + "<br>"+
		           "El total de numeros positivos es :" + cantPositivos + "<br>"+
				   "El total de numeros negativos es :" + cantNegativos + "<br>"+
				   "La cantidad de ceros es : " + cantCeros + "<br>"+
				   "La cantidad de numeros pares es :" + cantNumPares +	"<br>"+
				   "El promedio de numeros positivos es :" + promedioPositivos + "<br>"+
				   "El promedio de numeros negativos es : " + promedioNegativos + "<br>"+
				   "La diferencia de numeros negativos y positivos es : " + difereciaNegativosPositivos);




}//FIN DE LA FUNCIÓN