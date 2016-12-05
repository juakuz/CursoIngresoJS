function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	
	while (respuesta=="s")
	
	{
		contador++;
		numeroIngresa=prompt("ingrese un numero");
		console.log(contador);
		acumulador=acumulador+parseInt(numeroIngresa);
		respuesta=prompt("desea continuar, s o n");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN