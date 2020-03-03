function mostrar()
{
    var letra;
    var numero;
    var respuesta="si";
    var contador=0;

    while(respuesta=="si"){
        letra=prompt("Ingrese una letra: ");
        //valido numero
        while () {

        }
        numero=parseInt(prompt("Ingrese un numero entre -100 y 100: "));
        //valido letra
        while (numero<-100 && numero>100){
            numero=parseInt(prompt("Numero incorrecto.Ingrese un numero: "));
        }
        respuesta = prompt ("Desea continuar? Escriba si: ");
        contador++;
    }
    document.write()

}
