/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
    // Declaro variable
    var nombre;
    // Asigno variable
    nombre = prompt ("Ingrese su nombre: "); 
    // Asigno variable al Id
	document.getElementById("elNombre").value = nombre;

}

/* 

	var nombre = prompt ("Ingrese su nombre");
	
	document.getElementById("elNombre").value = nombre;

*/