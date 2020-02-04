/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    var numeroDos;
    var numeroDosParseado;
    var resultado;

    

    
    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = document.getElementById("numeroDos").value;
    numeroDosParseado = parseInt(numeroDos);
    
    resultado = numeroUno + numeroDosParseado ;
    

/*
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value; 

*/
    alert (resultado);

}

