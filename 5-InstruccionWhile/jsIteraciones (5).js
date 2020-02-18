function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLocaleLowerCase();
//Validar el dato. No vamos a parar hasta que el dato este bien
while (!(sexo == "f" || sexo == "m")) {
    var sexo = prompt("ingrese f ó m .");
    sexo = sexo.toLocaleLowerCase();
}
/*do {
     var sexo = prompt("ingrese f ó m .");
     sexo = sexo.toLocaleLowerCase();
    } while (!(sexo=="f" || sexo=="m"));
*/
//Aca el dato es correcto
switch (sexo) {
    case "f":
        sexo = "Femenino"
        break;
    case "m":
        sexo = "Masculino"
        break;
}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN