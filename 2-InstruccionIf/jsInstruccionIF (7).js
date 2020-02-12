function mostrar()
{
//tomo la edad  

var edad;
var estadoCivil;

edad = parseInt(document.getElementById("edad").value);
estadoCivil = document.getElementById("estadoCivil").value;

console.log("Ver edad :"+ edad);
console.log("Ver estado civil: "+ estadoCivil);


if ( edad < 18  && estadoCivil != "Soltero" )
{ 
    alert ("Es muy pequeño para no estar soltero");
}
/*
 if (!(edad >=18) && !(estadoCivil == "Soltero" ))
	{alert("Es muy pequeño para no ser soltero");}

*/
}//FIN DE LA FUNCIÓN