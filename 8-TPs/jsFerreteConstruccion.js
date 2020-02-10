/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var radio;
    var resultado;

    largo = parseInt(document.getElementById("Largo").value) ;
    ancho = parseInt(document.getElementById("Ancho").value) ;
    radio = parseInt(document.getElementById("Radio").value) ;

    resultado = ( largo * 2 + ancho *2 ) * 3 ;

    alert ("La cantidad de alambre necesaria es: " + resultado);

}
function Circulo () 
{
	var largo;
    var ancho;
    var radio;
    var resultado;

    largo = parseInt(document.getElementById("Largo").value) ;
    ancho = parseInt(document.getElementById("Ancho").value) ;
    radio = parseInt(document.getElementById("Radio").value) ;

    resultado = ( radio * 2 * 3.14 ) *3 ;

    alert ("La cantidad de alambre necesaria es: " + resultado);
}
function Materiales () 
{
	var largo;
    var ancho;
    var radio;
    var cemento;
    var cal;

    largo = parseInt(document.getElementById("Largo").value) ;
    ancho = parseInt(document.getElementById("Ancho").value) ;
    radio = parseInt(document.getElementById("Radio").value) ;

    resultado = ( largo * ancho ) ;
    cemento = ( resultado ) * 2 ;
    cal = ( resultado ) *3 ;

    alert ("Bolsas de cemento necesarias: " + cemento  +   "\n"  + "Bolsas de cal necesarias: " + cal);
}