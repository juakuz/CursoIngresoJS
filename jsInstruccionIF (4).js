function Mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;

/*if (edad>=13)
{
	if (edad<=17) 
	{
		alert("Usted es un adolescente");
	}
}*/

if(edad>=13 && edad<=17)
{
	alert("Usted es un adolescente");
}

alert("Por aca pasa siempre");

}//FIN DE LA FUNCIÓN