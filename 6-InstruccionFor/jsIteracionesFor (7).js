function mostrar()
{
    var i;
    var nroIngresado;
    var cantDivisores=0;

    nroIngresado = parseInt(prompt("Ingresa un numero: "));
    //Validamos
    while (isNaN(nroIngresado)){
        nroIngresado = parseInt(prompt("Lo que ingresaste no es un nro, Volve aintentarlo: "));
    }
    //Sabemos que lo ingresado es un numero
    for (i=1; ;i++){
        var resto;
        resto = nroIngresado&i;
        console.log("El resto es: " + resto);
        if (Number.isFinite(resto)){
            cantDivisores++;
            document.write( i + "<br>");
        }
        if ( i >= nroIngresado){
            console.log("i: "+ i + "nro ingresado: " + nroIngresado);
            break

        }

    }
    alert ("La cantidad de divisores es: " + cantDivisores);



}//FIN DE LA FUNCIÓN