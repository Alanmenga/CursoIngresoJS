/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
     var numeroUno;
     var numeroDos;
     

     numeroUno = parseInt(document.getElementById("sueldo").value);

     numeroDos = numeroUno * 0.1 + numeroUno ;
     
     document.getElementById("resultado").value = numeroDos;

    
	
}
