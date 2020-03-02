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
    for ( i=1 ; i<=nroIngresado ; i++ ){
        if (nroIngresado%i==0){
            cantDivisores++;
            document.write( i + "<br>");
        }
    }
    alert ("La cantidad de divisores es: " + cantDivisores);




}//FIN DE LA FUNCIÓN