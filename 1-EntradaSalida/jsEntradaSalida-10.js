/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numeroUno;
    var numeroDos;

    numeroUno = parseInt(document.getElementById("importe").value);

    numeroDos = numeroUno - numeroUno * 0.25  ;

    document.getElementById("resultado").value = numeroDos ;

}
