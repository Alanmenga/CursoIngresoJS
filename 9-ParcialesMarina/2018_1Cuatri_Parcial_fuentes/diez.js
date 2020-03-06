function mostrar()
{
    var marca;
    var kilosxBolsa;
    var cantBolsas;
    var precioxBolsa;
    var acumuPeso=0;
    var acumuPesoMaximo;
    var acumuPesoTotal=0;
    var seguir;
    var flag=0;
    
    var marcaPesoMaximo;
    var marcaprecioxBolsaMaximo;
    var marcaprecioxBolsaMinimo;
    var marcaMascantBolsas;
    var cantBolsasMaximo;
    var precioxBolsaMaximo;
    var precioxBolsaMinimo;
    

    do {

        //Pedimos los datos y validamos
        marca=prompt("Ingrese marca de la bolsa: ");
        while ( marca=="" || marca==null){
            marca=prompt("Marca incorrecta. Ingrese la marca de la bolsa: ");
        }
        kilosxBolsa=parseInt(prompt("Ingrese la cantidad de kilos de la bolsa: "));
        while ( kilosxBolsa<0 || isNaN(kilosxBolsa) ){
            kilosxBolsa=parseInt(prompt("Cantidad de kilos incorrectos. Ingrese la cantidad de kilos de la bolsa: "));
        }
        cantBolsas=parseInt(prompt("Ingrese la cantidad de bolsas: "));
        while ( cantBolsas<0 || isNaN(cantBolsas) ){
            cantBolsas=parseInt(prompt("Cantidad de bolsas incorrecta. Ingrese la cantidad de bolsas; "));
        }
        precioxBolsa=parseInt(prompt("Ingrese el precio por bolsa: "));
        while ( precioxBolsa<0 || isNaN(precioxBolsa) ){
            precioxBolsa=parseInt(prompt("Precio por bolsa incorrecto. Ingrese el precio por bolsa: "));
        }

        //Hacemos el analisis
        //a) que marca tiene más kilos en el contenedor?
        acumuPeso=cantBolsas*kilosxBolsa;
        if (flag==0 || acumuPeso>acumuPesoMaximo ){
            acumuPesoMaximo=acumuPeso;
            marcaPesoMaximo=marca;
        }
        //b) que marca tiene más bolsas de alimento en el contenedor
        if (flag==0 || cantBolsas>cantBolsasMaximo ){
            cantBolsasMaximo=cantBolsas;
            marcaMascantBolsas=marca;
        }
        //c) que marca tiene el mayor importe por bolsa de alimento
        if (flag==0 || precioxBolsa>precioxBolsaMaximo ){
            precioxBolsaMaximo=precioxBolsa;
            marcaprecioxBolsaMaximo=marca;
        }
        //d) el importe y la marca de la bolsa de alimento menos pesada.
        if ( flag==0 || precioxBolsa<precioxBolsaMinimo ){
            precioxBolsaMinimo=precioxBolsa;
            marcaprecioxBolsaMinimo=marca;
            flag=1;
        }
    acumuPesoTotal=acumuPeso+acumuPesoTotal
    seguir=confirm("Desea seguir?");
    }while( seguir && acumuPesoTotal<=1000 );
    

    document.write("a)La marca que tiene más kilos en el contenedor es: "+marcaPesoMaximo+"<br>");
    document.write("b)La marca que tiene más bolsas de alimento en el contenedor es: "+marcaMascantBolsas+"<br>");
    document.write("c)La marca que tiene el mayor importe por bolsa de alimento es: "+marcaprecioxBolsaMaximo+"<br>");
    document.write("d)El importe y la marca de la bolsa de alimento menos pesada es: "+marcaprecioxBolsaMinimo+"<br>");
}