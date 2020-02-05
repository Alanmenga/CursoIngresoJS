/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numeroUno;
    var descuento;
    var valortotal;

    numeroUno = parseInt(document.getElementById("importe").value);

    //numeroDos = numeroUno - numeroUno * 0.25  ;

    descuento = (numeroUno * 25)/100 ;

    valortotal = numeroUno - descuento ;



    document.getElementById("resultado").value = valortotal ;

}
