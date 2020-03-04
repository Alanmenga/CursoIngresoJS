function mostrar()
{
    var nombre;
    var maxnombre;
    var cantPersonas=0;
    var maxcantPersonas;
    var cantPersPARAmaxCantDias;
    var contPagoTarjeta=0;
    var contPagoEfectivo=0;
    var contPagoQR=0;
    var cantDias;
    var contDias=0;
    var acumuDias=0;
    var maxcantDias;
    var formaPago;
    var flag=0;
    var seguir;
    var promedioDias

    do{
        //Validaciones
         nombre=prompt("Ingrese el nombre: ");
         while ( nombre=="" || nombre==null) {
             nombre=prompt("Nombre incorrecto. Ingrese el nombre: ");
         }
         cantPersonas=parseInt(prompt("Ingrese la cantidad de personas(1;20): "));
         while ( cantPersonas<1 || cantPersonas>20 || isNaN(cantPersonas)) {
             cantPersonas=parseInt(prompt("Cantidad de personas incorrecta. Ingrese cantidad de personas(1;20): "));
         }
         cantDias=parseInt(prompt("Ingrese cantidad de dias(0;365): "));
         while ( cantDias<0 || cantDias>365 || isNaN(cantDias)) {
             cantDias=parseInt(prompt("Cantidad de dias incorrecta. Ingrese cantidad de dias(0;365): "));
         }
         formaPago=prompt("Ingrese forma de pago(efectivo;tarjeta;QR): ");
         while (!( formaPago=="efectivo" || formaPago=="tarjeta" || formaPago=="QR" )){
            formaPago=prompt("Forma de pago incorrecta. Ingrese forma de pago(efectivo;tarjeta;QR): ");
         }
         //Calculos
         //a)informar el huésped que trajo más personas en una sola reserva
         if (flag==0 || cantPersonas>maxcantPersonas){
             maxcantPersonas=cantPersonas;
             maxnombre=nombre;
         }
         //b) la cantidad de personas que se quedaron más días
         if (flag==0 || cantDias>maxcantDias ) {
             maxcantDias=cantDias;
             cantPersPARAmaxCantDias=cantPersonas;
             flag=1;
         }
         //c) la forma de pago más utilizada.
         if (formaPago=="efectivo"){
             contPagoEfectivo++;
         }
         if (formaPago=="tarjeta"){
             contPagoTarjeta++;
         }
         if (formaPago=="QR"){
             contPagoQR++;
         }
         //d) promedio cantidad dias de reserva
         contDias++;
         acumuDias=acumuDias+cantDias;


        seguir=prompt("Desea continuar?Escriba 'si': ");
    }while (seguir=="si");
    /* seguir=confirm("Desea seguir?");
    }while(seguir);*/

    if ( contPagoEfectivo>contPagoQR && contPagoEfectivo>contPagoTarjeta){
        mejorFormaPago = "Efectivo"
    }else if (contPagoTarjeta>contPagoEfectivo && contPagoTarjeta>contPagoQR){
        mejorFormaPago = "Tarjeta"
    }else if (contPagoQR>contPagoTarjeta && contPagoQR>contPagoEfectivo){
        mejorFormaPago = "QR"
    }

    promedioDias= acumuDias/contDias;

    document.write("a)el huésped que trajo más personas en una sola reserva es: "+ maxnombre +"<br>");
        document.write("b) la cantidad de personas que se quedaron más días es: "+ cantPersPARAmaxCantDias+"<br>");
        document.write("c) la forma de pago más utilizada es: "+ mejorFormaPago +"<br>");
        document.write("d)  el promedio de cantidad de días por reserva es: "+promedioDias+"<br>");
        

}
