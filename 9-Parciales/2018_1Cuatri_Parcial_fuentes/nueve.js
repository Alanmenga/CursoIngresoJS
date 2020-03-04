function mostrar()
{
     var marca;
     var peso;
     var temperatura;
     var cantTempPares=0;
     var flag=0;
     var cantProdEnFrio=0;
     var maximo;
     var marcaMaximo;
     var minimo;
     var marcaMinimo;
     var cantProductos=0;
     var acumuPeso=0;
     var promedioPeso;
     var seguir;

     do {
         //Ingreso y validaciones
         marca = prompt("Ingrese la marca del producto: ");
         while ( marca=="" || marca==null ) {
             marca = prompt("Marca incorrecta. Ingrese la marca del producto: ");
         }
         peso = parseInt(prompt("Ingrese el peso del producto(1;100):"));
         while ( peso<1 || peso>100 || isNaN(peso)){
             peso = parseInt(prompt("Peso incorrecto. Ingrese el peso del producto(1;100): "));
         }
         temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento del producto(-30;30): "));
         while ( temperatura<-30 || temperatura>30 || isNaN(temperatura)){
             temperatura = parseInt(prompt("Temperatura incorrecta. Ingrese la temperatura de almacenamiento(-30;30): "));
         }
         //A)Cantidad de temperaturas pares
         if (temperatura%2==0){
             cantTempPares++;
         }
         //C)La cantidad de productos que se conservan a menos de 0 grados
         if ( temperatura<0 ){
             cantProdEnFrio++;
         }
         //F)El peso maximo y minimo B)La marca del producto mas pesado
         if ( flag==0 || peso>maximo ){
             maximo=peso;
             marcaMaximo=marca;
         }
         if ( flag==0 || peso<minimo ){
             minimo=peso;
             marcaMinimo=marca;
             flag=1;
         }
         //D)El promedio del peso de todos los productos
         cantProductos++;
         acumuPeso=acumuPeso+peso
         promedioPeso=acumuPeso/cantProductos;

         
         seguir = prompt("Quiere continuar?Escriba 'si': ");
        } while (seguir == 'si');

        document.write("a) La cantidad de temperaturas pares es: "+ cantTempPares+"<br>");
        document.write("b) La marca del producto más pesado es: "+ marcaMaximo+"<br>");
        document.write("c) La cantidad de productos que se conservan a menos de 0 grados es: "+cantProdEnFrio+"<br>");
        document.write("d) El promedio del peso de todos los productos es: "+promedioPeso+"<br>");
        document.write("f) El peso máximo es: "+ maximo +"  y el mínimo es: "+ minimo+"<br>");
}
