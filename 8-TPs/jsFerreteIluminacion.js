/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 var cantidad;
 var marca;
 var resultado;
 var descuento;
 var totalconDesc;
 var ingbrut;
 var totalconib;
 
 cantidad = parseInt(document.getElementById("Cantidad").value);
 marca = document.getElementById("Marca").value;

 /*A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.*/
 if ( cantidad >= 6 )
       {
       resultado = (cantidad * 35);
       descuento = ( resultado * 50 ) / 100 ;
       totalconDesc = resultado - descuento;
       document.getElementById("precioDescuento").value = totalconDesc ; 
       }
/*B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un 
descuento del 40 % y si es de otra marca el descuento es del 30%.*/
 else if ( cantidad ==5 )
       {
           if ( marca == "ArgentinaLuz")
           {resultado = (cantidad *35);
           descuento = ( resultado * 40) / 100 ;
           totalconDesc = resultado - descuento;
           document.getElementById("precioDescuento").value = totalconDesc ;}
           else
           {resultado = (cantidad *35);
           descuento = ( resultado * 30) / 100 ;
           totalconDesc = resultado - descuento ;
           document.getElementById("precioDescuento").value = totalconDesc ;}  
       }
/*C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%. */
 else if ( cantidad == 4 )  
       {
          if ( marca == "ArgentinaLuz" || marca == "FelipeLamparas")
          {resultado = (cantidad *35);
          descuento = ( resultado * 25) / 100 ;
          totalconDesc = resultado - descuento;
          document.getElementById("precioDescuento").value = totalconDesc ;}
          else
          {resultado = (cantidad *35);
          descuento = ( resultado * 20) / 100 ;
          totalconDesc = resultado - descuento;
          document.getElementById("precioDescuento").value = totalconDesc ;}  
       }
/* D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento 
es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de 
otra marca un 5%. */
 else if ( cantidad == 3 )  
       {
          if ( marca == "ArgentinaLuz" )
          {resultado = (cantidad *35);
          descuento = ( resultado * 15) / 100 ;
          totalconDesc = resultado - descuento;
          document.getElementById("precioDescuento").value = totalconDesc ;}
          else if ( marca == "FelipeLamparas")
          {resultado = (cantidad *35);
          descuento = ( resultado * 10) / 100 ;
          totalconDesc = resultado - descuento;
          document.getElementById("precioDescuento").value = totalconDesc ;}  
          else 
          {resultado = (cantidad *35);
          descuento = ( resultado * 5) / 100 ;
          totalconDesc = resultado - descuento;
          document.getElementById("precioDescuento").value = totalconDesc ;}
       }
/* E. Si el importe final con descuento suma más de $120 se debe sumar un 10% 
de ingresos brutos en informar del impuesto con el siguiente mensaje: 
”IIBB Usted pago X”, siendo X el impuesto que se pagó. */
 if ( totalconDesc > 120 )
       {
          ingbrut = (totalconDesc * 10) / 100;
          totalconib = totalconDesc + ingbrut;
          alert ("IIBB Usted pago: " + ingbrut);
          document.getElementById("precioDescuento").value = totalconib ; 
       }

}


