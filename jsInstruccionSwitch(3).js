function Mostrar()
{
  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño){
	
	case"Enero":
	alert("Este mes tiene 30 o mas días");
	break;

	case"Febrero":
	alert("Este mes no tiene mas de 29 días");
	break;

	default:
	alert("Este mes tiene 30 o mas días");
	break;
}	
	


}//FIN DE LA FUNCIÓN