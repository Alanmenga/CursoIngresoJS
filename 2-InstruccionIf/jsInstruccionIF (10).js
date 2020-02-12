function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	 
   var nota;

   nota = Math.floor(Math.random() * 10 + 1) ;

   if ( nota >= 4 && nota <9)

   {alert ("Aprobo");}

   else if ( nota >= 9 )

   {alert ("Excelente");}

   else if ( nota < 4 )

   {alert ("Vamos, la proxima se puede");}

}//FIN DE LA FUNCIÓN