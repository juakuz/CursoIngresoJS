function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	

	
	//alert('iteración while');
	while(numero<0 || numero>9)
	{
		numero = prompt("Re-ingrese un número entre 0 y 10.");		
	
	}
	document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN