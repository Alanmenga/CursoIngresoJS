/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
    
    resultado = numeroUno + numeroDos ;
    
    alert("La suma es: " + resultado);
}

function restar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
    
    resultado = numeroUno - numeroDos ;
    
    alert("La resta es: " + resultado);
	
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
    
    resultado = numeroUno * numeroDos ;
    
    alert("La Multiplicacion es: " + resultado);
	
}

function dividir()
{
	var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
    
    resultado = numeroUno / numeroDos ;
    
    alert("La Division es: " + resultado);
}

