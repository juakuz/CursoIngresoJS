function Mostrar()
{
	var contador;
	contador=0;

	document.write("<h6> Hola </h6>");
	//alert('iteración while');
	while(contador<10)
	{
	
		contador++;
		console.log(contador);
		document.write("<br>contador: "+contador);
	

	}

	document.write("<p>fin</p>");

}//FIN DE LA FUNCIÓN