/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var tempCent;
    var tempFah;
    var resultado;
     
    tempFah = parseInt(document.getElementById("Temperatura").value);

    resultado = ( tempFah -32) / 1.8 ;

    alert ("La temperatura en Centigrados es: " + resultado);
}

function CentigradosFahrenheit () 
{
	var tempCent;
    var tempFah;
    var resultado;
     
    tempCent = parseInt(document.getElementById("Temperatura").value);

    resultado = ( tempCent * 1.8 ) + 32 ;

    alert ("La temperatura en Fahrenheit es: " + resultado);
}

