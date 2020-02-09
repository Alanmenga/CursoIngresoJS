/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var nroUno;
    var nroDos;
    var nroTres;
    var resultado;

    nroUno = parseInt(document.getElementById("PrecioUno").value);
    nroDos = parseInt(document.getElementById("PrecioDos").value);
    nroTres = parseInt(document.getElementById("PrecioTres").value);

    resultado = nroUno + nroDos + nroTres ;

    alert ("La suma es: " + resultado);

}
function Promedio () 
{
	var nroUno;
    var nroDos;
    var nroTres;
    var resultado;

    nroUno = parseInt(document.getElementById("PrecioUno").value);
    nroDos = parseInt(document.getElementById("PrecioDos").value);
    nroTres = parseInt(document.getElementById("PrecioTres").value);

    resultado = (nroUno + nroDos + nroTres) / 3 ;

    alert ("El promedio es: " + resultado);

}
function PrecioFinal () 
{
	var nroUno;
    var nroDos;
    var nroTres;
    var iva; 
    var resultado;

    nroUno = parseInt(document.getElementById("PrecioUno").value);
    nroDos = parseInt(document.getElementById("PrecioDos").value);
    nroTres = parseInt(document.getElementById("PrecioTres").value);

    iva = ( ( nroUno + nroDos + nroTres ) * 21 ) / 100 ;

    resultado = (nroUno + nroDos + nroTres) + iva ;

    alert ("El total mas IVA (21%) es: " + resultado);

}