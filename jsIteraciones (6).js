function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresa;
	

	while (contador<5)
	
	{
		contador++;
		numeroIngresa=prompt("ingrese un numero");
		console.log(contador);
		acumulador=acumulador+parseInt(numeroIngresa);

	}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN