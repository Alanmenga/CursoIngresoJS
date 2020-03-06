 function mostrar()
    {
        var altura;
        var sexo;
        var i;
    
        var contadorAlturas=0;
        var flag=0;
        var alturaMenor;
        var sexoMenor;
        var cantFMas190=0;
    
    
    
        for (i = 1; i <= 5; i++) {
    
            //Pedimos datos y validamos
            altura=parseInt(prompt("Ingrese la altura de el/la jugador(0;250)cm: "));
            while ( altura<0 || altura>250){
                altura=parseInt(prompt("Altura incorrecta. Ingrese la atura de el/la jugador(0;250)cm: "));
            }
            sexo=prompt("Ingrese el sexo de el/la jugador(f-m): ");
            while ( sexo!="f" && sexo!="m"){
                sexo=prompt("Sexo incorrecto. Ingrese el sexo de el/la jugador(f-m): ");
            }
            //Analisis de datos
            //a) El promedio de las alturas totales.
            contadorAlturas=contadorAlturas+altura;
    
            //b) La altura más baja y el sexo de esa persona.
            if ( flag==0 || altura<alturaMenor){
                alturaMenor=altura;
                sexoMenor=sexo;
                flag=1
            }
            //c) La cantidad de muheres que su altura supere los 190 centimetros.
            if ( altura>190 && sexo=="f"){
                cantFMas190++;
            }
        }
        promedioAlturas=contadorAlturas/5
        alert("a) El promedio de las alturas totales es: "+promedioAlturas+"\nb) La altura más baja es: "+alturaMenor+ " y el sexo de esa persona es: "+sexoMenor+ "\nc) La cantidad de mujeres que su altura supere los 190 centimetros es: "+cantFMas190);
    }

