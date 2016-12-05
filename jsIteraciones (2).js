function Mostrar()
{
	//alert('iteración while');

	var contador;
	contador=10;

	document.write("<h6> Hola </h6>");
	//alert('iteración while');
	while(contador>1)
	{
	
		contador--;
		console.log(contador);
		document.write("<br>contador: "+contador);
	

	}

	document.write("<p>fin</p>");

}//FIN DE LA FUNCIÓN