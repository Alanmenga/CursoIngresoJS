function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if ( edad < 13 )

{ alert ("Usted es un niño"); }

else if ( edad < 18 )

{ alert ("Usted es un adolescente"); }

else if ( edad >= 18 )

{ alert ("Usted es mayor de edad"); }


}//FIN DE LA FUNCIÓN