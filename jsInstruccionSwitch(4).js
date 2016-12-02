function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	
switch(mesDelAño){
		case"Enero":
		case"Marzo":
		case"Mayo":
		case"Julio":
		case"Agosto":	
		case"Octubre":
		case"Diciembre":
		alert("Tienen 31 dias");
		break;

		case"Febrero":
		alert("tiene 28 dias");
		break;

		default:
		alert("tienen 30 dias");
		break;
}


}//FIN DE LA FUNCIÓN