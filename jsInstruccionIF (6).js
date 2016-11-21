function Mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById('edad').value;

/*	if (edad>18) {

	alert("Es mayor")
}

	if(edad>=13 && edad<=18)
{
	alert("Usted es un adolescente");
}
	if (edad<13) 
	{
		alert("Usted es un niño")
	}

}//FIN DE LA FUNCIÓN*/

if (edad<13)
 {
 	alert("es menor");
 }
 else
 {
 	if(edad>17)
 	{
 		alert("es Mayor");
 	}
 	else
 	{
 	 alert("Es adolescente");
 	}
 }
 }