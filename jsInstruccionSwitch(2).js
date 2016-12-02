function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch (mesDelAño) 
		{
		case"Enero":
		alert("Falta para el invierno");
		break;
		
		case"Febrero":
		alert("Falta para el invierno");
		break;
		
		case"Marzo":
		alert("Falta para el invierno");
		break;

		case"Abril":
		case"Mayo":
		case "Junio":
		alert("Falta para el invierno");
		break;
		
		case "Julio":
		case "Agosto":
		alert("Abrigate que hace frio.");
		break;

		default:
		alert("ya pasamos el frio, ahora calor!!!")
		break;		


}

}//FIN DE LA FUNCIÓN