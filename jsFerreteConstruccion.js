/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=document.getElementById('Largo').value;
	numeroDos=document.getElementById('Ancho').value;
	
	
	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	
	
	suma = (numeroUno*2+numeroDos*2)*3;
	
	alert(suma);
}
function Circulo () 
{
	var numeroUno;
	var suma;

	
	numeroUno=document.getElementById('Radio').value;
	
	
	numeroUno=parseInt(numeroUno);
	
	suma = (2*3.14*numeroUno)*3;
	
	alert(suma);

}
function Materiales () 
{
	var numeroUno;
	var numeroDos;
	var area;
	var bolsaCemento;
	var bolsaCal;

	numeroUno=document.getElementById('Largo').value;
	numeroDos=document.getElementById('Ancho').value;
	
	
	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	
	
	area = (numeroUno*numeroDos);
	bolsaCemento=(area*2);
	bolsaCal=(area*3);

	alert("se necesita "+bolsaCemento+" bolsas de cemento y "+bolsaCal+" bolsas de cal")


}